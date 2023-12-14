from . import models
from rest_framework import serializers


class CuctomerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomerUser
        fields = "__all__"
