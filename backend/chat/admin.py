from django.contrib import admin
from .models import Message

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'message', 'timestamp')
    list_filter = ('username', 'timestamp')
    search_fields = ('username', 'message')
