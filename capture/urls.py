from django.urls import path
from .views import home, webcam

urlpatterns = [
    path('', home, name='home'),
    path('webcam', webcam, name='webcam'),
]