from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from django.views.generic import DetailView
from . import forms
from django.urls import reverse

# Create your views here.

def index(request):
    return render(request, 'security/index.html')


def about(request):
    return render(request, 'security/about.html')

def service(request):
    return render(request, 'security/service.html')

def quote(request):
    if request.method == 'POST':
        surveillance_system = request.POST['surveillance_system']
        intrusion_detection = request.POST['intrusion_detection']
        counter_surveillance = request.POST['counter_surveillance']
        security_consultancy_and_raining = request.POST['security_consultancy_and_raining']
        investigation_and_recovery = request.POST['investigation_and_recovery']
        gadgets_and_accessories = request.POST['gadgets_and_accessories']
        additional_info = request.POST['additional_info']
        name = request.POST['name']
        phone_number = request.POST['phone_number']
        email = request.POST['email']
        subject = request.POST['subject']
        preference_date = request.POST['preference_date']
        preference_time = request.POST['preference_time']
        message = request.POST['message']
        
        quotes = Quote(surveillance_system=surveillance_system, intrusion_detection=intrusion_detection, counter_surveillance=counter_surveillance, security_consultancy_and_raining=security_consultancy_and_raining, investigation_and_recovery=investigation_and_recovery, gadgets_and_accessories=gadgets_and_accessories, additional_info=additional_info, name=name, phone_number=phone_number, email=email, subject=subject, preference_date=preference_date, preference_time=preference_time, message=message)
        quotes.save()
        return redirect('quote')
    return render(request, 'security/quote.html')

def shop(request):
    return render(request, 'security/shop.html')

def blog(request):
    blogs = Blog.objects.all()
    return render(request, 'security/blog.html', {'blogs': blogs})

class BlogDetailView(DetailView):
    model = Blog
    
    form = forms.CommentForm
    
    def post(self, request, *args, **kwargs):
        form = forms.CommentForm(request.POST)
        if form.is_valid():
            post = self.get_object()
            form.instance.post = post
            form.save()
            
            return redirect(reverse("blog-detail", kwargs={
                'pk': post.pk
            }))
    
    def get_context_data(self, **kwargs):
        post_comments_count = Comment.objects.all().filter(post=self.object.id).count()
        post_comments = Comment.objects.all().filter(post=self.object.id)
        context = super().get_context_data(**kwargs)
        context.update({
            'form': self.form,
            'post_comments': post_comments,
            'post_comments_count': post_comments_count
        })
        return context


def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        subject = request.POST['subject']
        message = request.POST['message']
        contacts = Contact(name=name, email=email, subject=subject, message=message)
        contacts.save()
        return redirect('contact')
    return render(request, 'security/contact.html')

def clients(request):
    return render(request, 'security/clienteles.html')