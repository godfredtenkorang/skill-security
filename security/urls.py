from django.urls import path
from . import views
from .views import BlogDetailView


urlpatterns = [
    path('', views.index, name='index'),
    path('about_us/', views.about, name='about'),
    path('service/', views.service, name='service'),
    path('quote/', views.quote, name='quote'),
    path('shop/', views.shop, name='shop'),
    path('blog/', views.blog, name='blog'),
    path('blog/<int:pk>/', BlogDetailView.as_view(), name='blog-detail'),
    path('contact/', views.contact, name='contact'),
    path('clienteles/', views.clients, name='clienteles'),
]