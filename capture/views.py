from django.views.decorators.csrf import csrf_exempt
from .random_generator import random_filename
from django.shortcuts import render, redirect
from django.conf import settings
from io import BytesIO
from PIL import Image
import base64
import re


# Create your views here.

def home(request):
    return render(request, 'home.html')

def webcam(request):
    if request.POST:
        img_data = request.POST.get('captured-image')
        img_data = re.sub("^data:image/png;base64,", "", img_data)
        img_data = base64.b64decode(img_data)
        img_data = BytesIO(img_data)
        print(img_data)

        filename = random_filename()+'.png'
        image = Image.open(img_data)
        image.save(settings.MEDIA_ROOT /filename) 
        return redirect('home')
  
    return render(request, 'webcam.html')    