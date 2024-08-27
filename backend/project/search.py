from django.contrib.auth import get_user_model
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant.serializers import RestaurantGetSerializer
from review.models import Review
from review.serializers import ReviewGetSerializer
from user.serializers import UserSerializer

User = get_user_model()


class SearchView(GenericAPIView):

    def get_serializer_class(self, *args, **kwargs):
        type = self.request.query_params.get('type', None)
        if type == 'restaurant':
            return RestaurantGetSerializer
        elif type == 'user':
            return UserSerializer
        elif type == 'review':
            return ReviewGetSerializer

    def get_queryset(self):
        type = self.request.query_params.get('type', None)
        if type == 'restaurant':
            queryset = Restaurant.objects.all()
            filter_option = self.request.query_params.get('search_string')
            if filter_option is not None:
                return queryset.filter(name__icontains=filter_option)
            return queryset
        elif type == 'user':
            queryset = User.objects.all()
            filter_option = self.request.query_params.get('search_string')
            if filter_option is not None:
                return queryset.filter(username__icontains=filter_option)
            return queryset
        elif type == 'review':
            queryset = Review.objects.all()
            filter_option = self.request.query_params.get('search_string')
            if filter_option is not None:
                return queryset.filter(text_content__icontains=filter_option)
            return queryset

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
