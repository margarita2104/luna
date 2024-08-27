from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from comment.models import Comments
from comment.serializers import CommentCreateSerializer
from review.models import Review


class CommentCreateView(GenericAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentCreateSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        filter_option = self.kwargs.get('review_id')
        try:
            return Review.objects.get(id=filter_option)
        except Review.DoesNotExist:
            return None

    def post(self, request, *args, **kwargs):
        user_data = request.data
        review = self.get_object()
        serializer = self.get_serializer(data=user_data)
        serializer.is_valid(raise_exception=True)
        serializer.save(review=review, user=request.user)
        return Response(serializer.data)


class CommentDeleteView(GenericAPIView):
    queryset = Comments.objects.all()
    serializer_class = CommentCreateSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        filter_option = self.kwargs.get('comment_id')
        try:
            return Comments.objects.get(id=filter_option)
        except Comments.DoesNotExist:
            return None

    def delete(self, request, *args, **kwargs):
        review = self.get_object()
        if review.user.id is request.user.id or request.user.is_superuser:
            review.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_403_FORBIDDEN)


class CommentUserView(GenericAPIView):
    serializer_class = CommentCreateSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        queryset = Comments.objects.all()
        filter_option = self.kwargs.get('user_id')
        if filter_option is not None:
            return queryset.filter(user=filter_option)
        return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
