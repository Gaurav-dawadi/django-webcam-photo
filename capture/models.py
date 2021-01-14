from django.db import models

# Create your models here.

class ImageUpload(models.Model):
    my_image = models.ImageField()

    def __str__(self):
        return self.my_image
