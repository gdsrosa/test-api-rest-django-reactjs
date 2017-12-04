from django.db import models


class Donation(models.Model):
    donator_name = models.CharField(max_length=100)
    donator_email = models.EmailField(max_length=100)
    donation_type = models.CharField(max_length=100)
    quantity = models.IntegerField()

    class Meta:
        verbose_name = 'Donation'
        verbose_name_plural = 'Donations'
