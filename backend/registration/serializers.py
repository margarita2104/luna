from django.core.exceptions import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model

from registration.models import Registration

User = get_user_model()


def email_does_not_exist(email):
    try:
        User.objects.get(email=email)
        raise ValidationError(message='This email is taken')
    except User.DoesNotExist:
        return email


def email_does_exist(email):
    try:
        Registration.objects.get(email=email)
        return email
    except Registration.DoesNotExist:
        raise ValidationError(message='Registration does not exist!')


def username_does_not_exist(username):
    try:
        User.objects.get(username=username)
        raise ValidationError(message='This username is taken')
    except User.DoesNotExist:
        return username


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = ['email']


class RegistrationValidationSerializer(serializers.Serializer):
    email = serializers.EmailField(label='Registration E-Mail Address', validators=[email_does_exist])
    username = serializers.CharField(label='Username', validators=[username_does_not_exist])
    code = serializers.CharField(label='Validation code', write_only=True)
    password = serializers.CharField(label='password', write_only=True)
    password_repeat = serializers.CharField(label='password_repeat', write_only=True)
    location = serializers.CharField(label='location', write_only=True)

    def validate(self, data):
        code = data.get('code')
        email = data.get('email')
        reg_profile = Registration.objects.get(email=email)
        if str(reg_profile.code) != code:
            raise ValidationError(message='The code does not belong to this email!')
        if data.get('password') != data.get('password_repeat'):
            raise ValidationError(message='Passwords do not match!')
        return data

    def save(self, validated_data):
        email = validated_data.get('email')
        username = validated_data.get('username')
        location = validated_data.get('location')
        new_user = User(
            username=username,
            email=email,
            location=location,
            is_active=True,
        )
        new_user.set_password(validated_data.get('password'))
        new_user.save()
        return new_user
