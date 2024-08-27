from rest_framework import status
from rest_framework.generics import GenericAPIView, ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurant.models import Restaurant
from review.models import Review
from review.serializers import ReviewCreateSerializer, ReviewGetSerializer


class ReviewGetAllView(ListCreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewGetSerializer
    permission_classes = []


class ReviewCreateView(GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewCreateSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        filter_option = self.kwargs.get('restaurant_id')
        try:
            return Restaurant.objects.get(id=filter_option)
        except Restaurant.DoesNotExist:
            return None

    def post(self, request, *args, **kwargs):
        user_data = request.data
        restaurant = self.get_object()
        serializer = self.get_serializer(data=user_data)
        serializer.is_valid(raise_exception=True)
        serializer.save(restaurant=restaurant, user=request.user)
        return Response(serializer.data)


class ReviewRestaurantView(GenericAPIView):
    serializer_class = ReviewGetSerializer
    permission_classes = []

    def get_queryset(self):
        queryset = Review.objects.all()
        filter_option = self.kwargs.get('restaurant_id')
        if filter_option is not None:
            return queryset.filter(restaurant=filter_option)
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ReviewUserView(GenericAPIView):
    serializer_class = ReviewGetSerializer
    permission_classes = []

    def get_queryset(self):
        queryset = Review.objects.all()
        filter_option = self.kwargs.get('user_id')
        if filter_option is not None:
            return queryset.filter(user=filter_option)
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ReviewSpecificView(GenericAPIView):
    serializer_class = ReviewGetSerializer
    permission_classes = []

    def get_object(self):
        filter_option = self.kwargs.get('review_id')
        try:
            return Review.objects.get(id=filter_option)
        except Review.DoesNotExist:
            return None

    def get(self, request, *args, **kwargs):
        review = self.get_object()
        if review is not None:
            serializer = self.get_serializer(review)
            return Response(serializer.data)
        else:
            return Response({'detail': 'Not found.'}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, *args, **kwargs):
        review = self.get_object()
        if review.user.id is request.user.id or request.user.is_superuser:
            review.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_403_FORBIDDEN)

    def patch(self, request, *args, **kwargs):
        review = self.get_object()
        if review.user.id is request.user.id or request.user.is_superuser:
            serializer = self.get_serializer(review, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
        return Response(status=status.HTTP_403_FORBIDDEN)


class ReviewLikeView(GenericAPIView):
    serializer_class = ReviewGetSerializer
    permission_classes = []

    def get_object(self):
        filter_option = self.kwargs.get('review_id')
        try:
            return Review.objects.get(id=filter_option)
        except Review.DoesNotExist:
            return None

    def post(self, request, *args, **kwargs):
        review = self.get_object()
        user = self.request.user
        review_all_likes = review.liked_by.all()
        user_liked_review = user in review_all_likes
        if not user_liked_review:
            review.liked_by.add(user)
            serializer = self.get_serializer(review, partial=True)
            return Response(serializer.data)
        # This else would make it possible to only use the post endpoint to toggle liked_by
        # else:
        #     review.liked_by.remove(user)
        #     serializer = self.get_serializer(review, partial=True)
        #     return Response(serializer.data)
        return Response(status=status.HTTP_403_FORBIDDEN)

    def delete(self, request, *args, **kwargs):
        review = self.get_object()
        user = self.request.user
        review_all_likes = review.liked_by.all()
        user_liked_review = user in review_all_likes
        if user_liked_review:
            review.liked_by.remove(user)
            serializer = self.get_serializer(review, partial=True)
            return Response(serializer.data)
        return Response(status=status.HTTP_403_FORBIDDEN)


class ReviewLikeUserView(GenericAPIView):
    serializer_class = ReviewGetSerializer
    permission_classes = []

    def get_queryset(self):
        queryset = Review.objects.all()
        filter_option = self.request.user
        if filter_option is not None:
            return queryset.filter(liked_by=filter_option)
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ReviewCommentUserView(GenericAPIView):
    serializer_class = ReviewGetSerializer
    permission_classes = []

    def get_queryset(self):
        reviews = Review.objects.all()
        filter_option = self.request.user
        if filter_option is not None:
            reviews_filtered = reviews.filter(comments__user=filter_option).distinct()
        return reviews_filtered

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
