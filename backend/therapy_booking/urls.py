from django.urls import path
from .views import therapist_list, create_booking

urlpatterns = [
    path('therapists/', therapist_list, name='therapist-list'),
    path('bookings/', create_booking, name='create-booking'),
]