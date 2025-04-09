from django.urls import path
from .views import register_user, login_user, submit_enquiry 

urlpatterns = [
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
    path('enquiries/', submit_enquiry, name='submit-enquiry'),
]
