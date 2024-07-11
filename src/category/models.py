from django.db import models
from authentication.models import UserAccount
from datetime import date, datetime


class Category(models.Model):
    created_at = models.DateTimeField(default=datetime.now)
    updated_at = models.DateTimeField(default=datetime.now)
    category_name = models.CharField(max_length=255)


    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Category"
        verbose_name_plural = "Categories"
