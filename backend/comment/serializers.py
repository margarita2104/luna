from rest_framework import serializers

from comment.models import Comments


class CommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'
        read_only_fields = ['user', 'review']
