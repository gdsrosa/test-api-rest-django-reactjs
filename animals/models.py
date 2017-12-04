from django.db import models


class Animal(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    image = models.CharField(max_length=200)
    specie = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    remark = models.TextField(max_length=200)

    class Meta:
        verbose_name = 'Animal'
        verbose_name_plural = 'Animals'
