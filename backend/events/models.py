from django.db import models

class EventList(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class EventRegistration(models.Model):
    event = models.ForeignKey(EventList, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, default="Anonymous")  # Store name instead of user
    email = models.EmailField(default="email@example.com")  # Store email instead of user
    registered_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('email', 'event')  # Ensure an email can only register once per event

    def __str__(self):
        return f"{self.name} registered for {self.event.title}"
