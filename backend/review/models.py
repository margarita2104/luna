from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from project import settings
from restaurant.models import Restaurant


class Review(models.Model):
    text_content = models.TextField()
    rating = models.PositiveSmallIntegerField(validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    date_created = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)
    liked_by = models.ManyToManyField(to=settings.AUTH_USER_MODEL, blank=True, related_name="liked_by")
    restaurant = models.ForeignKey(to=Restaurant, on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
