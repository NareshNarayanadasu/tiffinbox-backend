from django.db import models
from django.contrib.auth.models import User

class ChefProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    phone = models.CharField(max_length=15)
    address = models.TextField()

class Meal(models.Model):
    chef = models.ForeignKey(ChefProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)

class Order(models.Model):
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE)
    customer_name = models.CharField(max_length=100)
    address = models.TextField()
    status = models.CharField(max_length=20, default='pending')
