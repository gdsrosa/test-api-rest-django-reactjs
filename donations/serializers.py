from rest_framework import serializers
from donations.models import Donation


class DonationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Donation
        fields = ('url', 'donator_name', 'donator_email', 'donation_type',
                  'quantity')
