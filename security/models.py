from django.db import models
from django.contrib.auth.models import User

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=True)
    subject = models.CharField(max_length=250)
    message = models.TextField()
    
    def __str__(self):
        return f"Contact from {self.name} - {self.email}"
    
    
class Quote(models.Model):
    surveillance_system = models.CharField(max_length=100, null=True, blank=True)
    intrusion_detection = models.CharField(max_length=100, null=True, blank=True)
    counter_surveillance = models.CharField(max_length=100, null=True, blank=True)
    security_consultancy_and_raining = models.CharField(max_length=100, default=False, null=True, blank=True)
    investigation_and_recovery = models.CharField(max_length=100, null=True, blank=True)
    gadgets_and_accessories = models.CharField(max_length=100, null=True, blank=True)
    additional_info = models.TextField()
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    preference_date = models.CharField(max_length=100)
    preference_time = models.CharField(max_length=100)
    message = models.TextField()
    
    def __str__(self):
        return self.name
    
class Blog(models.Model):
    title = models.CharField(max_length=250)
    subtitle = models.CharField(max_length=250)
    content = models.CharField(max_length=250)
    image = models.ImageField(default='blog_img')
    link = models.URLField()
    author = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    date_added = models.DateField(null=True, blank=True)
    
    
    def __str__(self):
        return self.title
    
class Comment(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField(null=True, blank=False)
    content = models.TextField()
    post = models.ForeignKey(Blog, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.username