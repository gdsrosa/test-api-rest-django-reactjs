from django.db import models


class Veterinary(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=50)
    crv = models.CharField(max_length=60)
    address = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Veterinary'
        verbose_name_plural = 'Veterinaries'
