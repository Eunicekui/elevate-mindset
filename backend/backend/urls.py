from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


def home_redirect(request):
    return redirect("http://localhost:5173/")  # Your React app URL

urlpatterns = [
    path("", home_redirect),  # Redirect Django homepage to React
    path('admin/', admin.site.urls),
    path('api/', include("api.urls")),
    path('api/', include("events.urls")),
    path('api/', include('therapy_booking.urls')),
    path('api/', include('journal.urls')),
    path('api/', include('users.urls')),
    path('api/users/', include('users.urls')),  # Register and Login routes
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  # Token refresh
    path('api/', include('chat.urls')),
    path('api/auth/', include('users.urls')),
   # path('api/chatbot/', include('chatbot.urls')),
    path('api/', include('chatbot.urls')),
   # path('api/auth/', include('rest_framework_simplejwt.urls')),

]
