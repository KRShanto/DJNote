from datetime import time
from django.db import models
from django.utils.timezone import now

# Create your models here.
class Group(models.Model):
    name = models.CharField(max_length=100)
    time = models.DateTimeField(default=now)

class Note(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    title = models.CharField(max_length=300)
    desc = models.TextField()
    time = models.DateTimeField(default=now)