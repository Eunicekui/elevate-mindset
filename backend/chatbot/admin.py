# chatbot/admin.py

from django.contrib import admin
from .models import ChatMessage

@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ('sender', 'text', 'timestamp')
    list_filter = ('sender', 'timestamp')
    search_fields = ('text',)
