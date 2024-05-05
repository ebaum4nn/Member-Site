from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import get_user_model
from rest_framework import generics, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import UserProfileSerializer
from .models import QueryModel
import logging


User = get_user_model()

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]  # Ensures that the user is logged in

    def get(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)

def home(request):
    return HttpResponse("Welcome to My Django App! 2")

def login(request):
    return render(request, 'registration/login.html', {'user': request.user, 'username': 'bob'})

def logout2(request):
    return render(request, 'registration/logout2.html', None)

def sendToLogin(request):
        return redirect('login')

@login_required
def profile(request):
    return render(request, 'profile.html', {'user': request.user})
