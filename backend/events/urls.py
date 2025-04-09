from django.urls import path
from .views import EventListView, EventRegistrationView

urlpatterns = [
    path('events/', EventListView.as_view(), name='event-list'),
    path('events/<int:event_id>/register/', EventRegistrationView.as_view(), name='event-register'),
]

