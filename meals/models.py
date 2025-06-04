from django.contrib.auth.models import User
from django.db import models

class ChefProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)

class Meal(models.Model):
    chef = models.ForeignKey(ChefProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    is_available = models.BooleanField(default=True)

class Order(models.Model):
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    order_time = models.DateTimeField(auto_now_add=True)
