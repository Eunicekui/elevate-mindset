from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import EventList, EventRegistration
from .serializers import EventSerializer, RegistrationSerializer

# List all events (Public access)
class EventListView(generics.ListAPIView):
    queryset = EventList.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny]  # ✅ Anyone can see events

# Register for an event (Public access, No login required)
class EventRegistrationView(APIView):
    permission_classes = [permissions.AllowAny]  # ✅ Anyone can register

    def post(self, request, event_id):
        name = request.data.get('name')
        email = request.data.get('email')

        if not name or not email:
            return Response({'error': 'Name and Email are required'}, status=400)

        try: event = EventList.objects.get(id=event_id)
        except EventList.DoesNotExists:
            return Response({'error': 'Event Not Found'}, status=404)

        if EventRegistration.objects.filter(email=email, event=event).exists():
            return Response({'error': 'You are already registered for this event'}, status=400)

        registration = EventRegistration.objects.create(name=name, email=email, event=event)
        return Response({'message': 'Successfully registered for the event!'}, status=202)
