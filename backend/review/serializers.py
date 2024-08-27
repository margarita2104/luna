from rest_framework import serializers

from restaurant.serializers import RestaurantGetSerializer
from review.models import Review
from user.serializers import UserSerializer


class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        read_only_fields = ['restaurant', 'user']


class ReviewGetSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    restaurant = RestaurantGetSerializer()

    class Meta:
        model = Review
        fields = '__all__'
