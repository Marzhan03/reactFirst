from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import auth
from django.contrib.auth import authenticate, logout
from django.shortcuts import render
from .models import CustomerUser
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . import serializers
from django.contrib.auth.decorators import login_required
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes


@api_view(["POST",])
def login(request):
    user = CustomerUser.objects.all()
    serializer = serializers.CuctomerUserSerializer(user, many=True)
    return Response(serializer.data)


    
def my_logout(request):
    pass

def register(request):
    pass

# @login_required
@api_view(["GET",])
@permission_classes([IsAuthenticated])
def test(request):
    return Response({"success":True})