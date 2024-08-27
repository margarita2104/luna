from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.postgres.fields import ArrayField


def get_profile_picture_upload_path(instance, filename):
    return f'{instance.id}/avatars/profile_pictures/{filename}'


def get_banner_picture_upload_path(instance, filename):
    return f'{instance.id}/avatars/banner_pictures/{filename}'


class User(AbstractUser):
    first_name = models.CharField(max_length=50, blank=True)
    last_name = models.CharField(max_length=50, blank=True)
    location = models.CharField(max_length=50, blank=True)
    phone = models.CharField(max_length=50, blank=True)
    things_i_love = ArrayField(ArrayField(models.TextField()), null=True)
    description = models.TextField(blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    profile_picture = models.ImageField(upload_to=get_profile_picture_upload_path, blank=True, null=True)
    banner_picture = models.ImageField(upload_to=get_banner_picture_upload_path, blank=True, null=True)

    def __str__(self):
        return self.username
