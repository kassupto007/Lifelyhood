from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Event(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, unique=True)
    title = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=200)
    startDate = models.DateField()
    endDate = models.DateField()

    def __str__ (self):
        return f'{ self.title }'
