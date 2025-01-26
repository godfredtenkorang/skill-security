from django import forms
from .models import Comment


class CommentForm(forms.ModelForm):
    username = forms.CharField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Enter you name here...',
    }))
    email = forms.EmailField(widget=forms.TextInput(attrs={
        'class': 'form-control',
        'placeholder': 'Enter you email here...',
    }))
    content = forms.CharField(widget=forms.Textarea(attrs={
        'class': 'md-textarea form-control',
        'placeholder': 'comment here ...',
        'rows': '4',
    }))
    
    class Meta:
        model = Comment
        fields = ('username', 'email', 'content',)