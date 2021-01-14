from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'home.html')

def webcam(request):
    return render(request, 'webcam.html')    