from django.db import models

class Therapist(models.Model):
    name = models.CharField(max_length=100)
    specialty = models.CharField(max_length=200)
    schedule = models.TextField()  # Stores schedule as a text

    def __str__(self):
        return self.name

class Booking(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    therapist = models.ForeignKey(Therapist, on_delete=models.CASCADE)
    therapy_type = models.CharField(max_length=50, choices=[('Online', 'Online'), ('Physical', 'Physical')])
    schedule = models.CharField(max_length=200)
    
    def __str__(self):
        return f'{self.name} - {self.therapist.name}'