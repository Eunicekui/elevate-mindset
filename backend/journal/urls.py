from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import JournalViewSet

router = DefaultRouter()
router.register(r'journals', JournalViewSet, basename='journal')

urlpatterns = [
    path('', include(router.urls)),
]
