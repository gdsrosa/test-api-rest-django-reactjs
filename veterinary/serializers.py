from rest_framework import serializers
from veterinary.models import Veterinary


class VeterinarySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Veterinary
        fields = ('url', 'name', 'phone', 'crv', 'address')
