from django.urls import path
from . import views

urlpatterns = [
    path('products', views.GetProducts),
    path('product/<pk>',views.GetProduct),
]