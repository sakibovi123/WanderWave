from venv import logger
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404
from rest_framework.views import APIView
from .models import *
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response as response
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth import update_session_auth_hash
from rest_framework.permissions import IsAuthenticated
from django.core.mail import send_mail
from datetime import datetime, date
from django.db.models import Q
from django.conf import settings
import json
from rest_framework import status


class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserAccountSerializer(data=request.data)
        try:
            if serializer.is_valid():
                user = serializer.save()
                token = RefreshToken.for_user(user)
                response_data = {
                    "refresh": str(token),
                    "access_token": str(token.access_token),
                    "user": serializer.data,
                }

                return response(response_data, status=status.HTTP_201_CREATED)
            else:
                return response(status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return response({"Error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




class GetAllUsersView(APIView):
    if settings.SITE_PROD_MODE:
        permission_classes = [IsAuthenticated]
    # permission_classes = (IsAuthenticated,)

    def get(self, request):
        try:
            users = UserAccount.objects.exclude(
                id=request.user.id
            )
            serializer_class = UserAccountSerializer(users, many=True)
            return response({
                "success": True,
                "data": serializer_class.data
            }, 200)
        except Exception as e:
            return response({
                "success": False,
                "message": str(e)
            }, 500)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = UserAccountTokenSerializer


class UserDetailsView(APIView):
    if settings.SITE_PROD_MODE:
        permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            user = UserAccount.objects.get(
                id=request.user.id
            )
            serializer_class = UserAccountSerializer(user)
            return response({
                "success": True,
                "data": serializer_class.data
            }, status=status.HTTP_200_OK)
        except Exception as e:
            return response({
                "success": False,
                "message": str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class PutUserProfile(APIView):
    if settings.SITE_PROD_MODE:
        permission_classes = [IsAuthenticated]

    message = "Email already registered please use another email"

    def put(self, request):
        try:
            user = UserAccount.objects.get(
                id=request.user.id
            )
        
            user.first_name = request.data.get("first_name")
            user.last_name = request.data.get("last_name")
            user.company_name = request.data.get("company_name")
            user.phone_number = request.data.get("phone_number")
            
            user.save()
            serializer_class = UserAccountSerializer(user)
            return response({
                "success": True,
                "data": serializer_class.data
            }, status=status.HTTP_200_OK)
        except UserAccount.DoesNotExist:
            return response({
                "message": "User not found"
            }, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return response({
                "success": False,
                "message": str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UpdateBuyerUserProfile(APIView):
    if settings.SITE_PROD_MODE:
        permission_classes = [IsAuthenticated]

    message = "Email already registered please use another email"

    def put(self, request):
        try:
            user = UserAccount.objects.get(
                id=request.user.id
            )
            get_email = request.data.get("email")
            if get_email:
                user.email = get_email
            else:
                user.email = user.email
            existing_email = UserAccount.objects.filter(
                email=get_email
            )
            # if existing_email and :
            #     return JsonResponse({
            #         "success": False,
            #         "message": "Email already registered to another user! please use another user"
            #     }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

            user.first_name = request.data.get("first_name")
            user.last_name = request.data.get("last_name")
            user.company_name = request.data.get("company_name")
            user.phone_number = request.data.get("phone_number")
            # user.role = Role.objects.get(
            #     id=request.data.get("role")
            # )
            user.created_by = request.data.get("created_by")
            password = request.data.get("password")
            if password:
                user.set_password(password)
            else:
                user.password = user.password

            roles = request.data.get("roles", [])

            # campaigns var for adding multi campaigns inside role
            campaigns = request.data.get("campaigns", [])
            # if roles:
            #     user.role.clear()
            #     for r in roles:
            #         user.role.clear()
            #         user.role.add(Role.objects.get(
            #             id=r
            #         ))

                # adding campaigns to specific roles
                # for c in campaigns:
                #     user.role.campaigns.clear()
                #     user.role.campaigns.add(
                #         Campaign.objects.get(
                #             id=c
                #         )
                #     )
            user.save()
            
            serializer_class = UserAccountSerializer(user)
            return response({
                "success": True,
                "data": serializer_class.data
            }, status=status.HTTP_200_OK)
        
        except UserAccount.DoesNotExist:
            return response({
                "message": "User not found"
            }, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return response({
                "success": False,
                "message": str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class ChangePasswordView(APIView):
    if settings.SITE_PROD_MODE:
        permission_classes = [IsAuthenticated]

    permission_classes = (IsAuthenticated,)

    def post(self, request):
        try:
            if request.method == "POST":
                serializer_class = ChangePasswordSerializer(data=request.data)
                if serializer_class.is_valid():
                    user = request.user
                    if user.check_password(serializer_class.data.get("old_password")):
                        user.set_password(
                            serializer_class.data.get("new_password"))
                        user.save()
                        update_session_auth_hash(request, user)
                        return response({
                            "success": True,
                            "message": "Password has been updated"
                        }, 200)
        except Exception as e:
            return response({
                "success": False,
                "message": str(e)
            }, 500)


class DeleteUserView(APIView):
    if settings.SITE_PROD_MODE:
        permission_classes = [IsAuthenticated]

    permission_classes = (IsAuthenticated, )

    def delete(self, request, user_id):
        try:
            user = UserAccount.objects.get(
                id=user_id
            )
            user.delete()
            return response({
                "success": True,
                "message": "User has been removed!"
            }, 200)
        except Exception as e:
            return response({
                "success": False,
                "message": str(e)
            }, 500)