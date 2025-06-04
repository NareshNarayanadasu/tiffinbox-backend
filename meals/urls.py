from rest_framework.routers import DefaultRouter
from .views import MealViewSet, OrderViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r'meals', MealViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
