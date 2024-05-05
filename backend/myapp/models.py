from django.db import models
from django.contrib.auth.models import User  # Django's built-in user model
from django.utils import timezone

# Create your models here.
class QueryModel(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(default=timezone.now)
    data_type = models.CharField(max_length=100)
    counter = models.IntegerField(default=0)