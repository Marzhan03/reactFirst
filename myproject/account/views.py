from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import auth
from django.contrib.auth import authenticate, logout
from django.shortcuts import render
from .models import CustomerUser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import serializers


@api_view(["GET",])
def login(request):
    user = CustomerUser.objects.all()
    serializer = serializers.CuctomerUserSerializer(user, many=True)
    return Response(serializer.data)


    
def my_logout(request):
    pass

def register(request):
    pass
