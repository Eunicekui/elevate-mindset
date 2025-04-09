from rest_framework import serializers
from .models import EventList, EventRegistration

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventList
        fields = '__all__'

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventRegistration
        fields = '__all__'
        read_only_fields = ['registered_at']  # Auto-generated timestamp
