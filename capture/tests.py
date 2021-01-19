from django.test import TestCase, Client
from django.urls import reverse, resolve 

# Create your tests here.

client = Client()

class TestURL(TestCase):
    def test_home_url(self):
        response = self.client.get(reverse('home'))
        self.assertEqual(response.status_code, 200)

    def test_webcam_url(self):
        response = self.client.get(reverse('webcam'))
        self.assertEqual(response.status_code, 200)