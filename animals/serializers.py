from rest_framework import serializers
from animals.models import Animal


class AnimalSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Animal
        fields = ('url', 'name', 'age', 'image', 'specie', 'breed', 'remark')
