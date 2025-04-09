from rest_framework import generics, permissions
from .models import Message
from .serializers import MessageSerializer

class MessageListCreateView(generics.ListCreateAPIView):
    queryset = Message.objects.order_by('timestamp')
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]