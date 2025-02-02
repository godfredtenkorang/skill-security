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
    path('investigation/', views.investigation, name='investigation'),
    path('sales/', views.sales, name='sales'),
    path('security/', views.security, name='security'),
    path('shocker/', views.shocker, name='shocker'),
    path('T&Cs/', views.terms, name='terms'),
    path('time/', views.time, name='time'),
    path('tracking/', views.tracking, name='tracking'),
    path('access/', views.access, name='access'),
    path('bug/', views.bug, name='bug'),
    path('cctv/', views.cctv, name='cctv'),
    path('dept/', views.dept, name='dept'),
    path('gps/', views.gps, name='gps'),
    path('pepperspray/', views.pepperspray, name='pepperspray'),
]