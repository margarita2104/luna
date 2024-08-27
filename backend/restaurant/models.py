from django.db import models

from project import settings


def get_image_upload_path(instance, filename):
    return f'{instance.id}/restaurant_pictures/{filename}'


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20,
                                choices=(('Asian', 'Asian'), ('Italian', 'Italian'),
                                         ('Burger', 'Burger'), ('Arab', 'Arab'),
                                         ('Mexican', 'Mexican')),
                                default='none')
    country = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip = models.CharField(max_length=100)
    website = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100, null=True)
    opening_hours = models.CharField(max_length=100, null=True)
    price_level = models.CharField(null=True)
    image = models.ImageField(upload_to=get_image_upload_path, null=True)
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.PROTECT)
