from rest_framework import viewsets
from veterinary.serializers import VeterinarySerializer
from veterinary.models import Veterinary
from animals.serializers import AnimalSerializer
from animals.models import Animal
from donations.serializers import DonationSerializer
from donations.models import Donation


class VeterinaryViewSet(viewsets.ModelViewSet):
    queryset = Veterinary.objects.all()
    serializer_class = VeterinarySerializer


class AnimalViewSet(viewsets.ModelViewSet):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer
