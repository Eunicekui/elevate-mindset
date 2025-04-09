from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

# Registration View
class RegisterView(generics.CreateAPIView):
    """
    Allows any user to create an account.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# Login View (JWT token generation)
class LoginView(TokenObtainPairView):
    """
    Allows users to log in and get a JWT token pair (access & refresh tokens).
    """
    permission_classes = [AllowAny]
