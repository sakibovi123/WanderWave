from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import *

urlpatterns = [
    # auth urls
    path("registration/", UserRegistrationView.as_view(), name="UserRegistration"),
    path('login/', CustomTokenObtainPairView.as_view(), name='TokenObtainPairView'),
    path("user/", UserDetailsView.as_view(), name="user-details"),
    
    path("update-user/", PutUserProfile.as_view(), name="PutUserProfile"),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # get all users except logged in user
    path("users/", GetAllUsersView.as_view(), name="GetAllUsersView"),

    # change password
    path("change-password/", ChangePasswordView.as_view(), name="ChangePasswordView"),
    # reset password
    path('password_reset/', include('django_rest_passwordreset.urls', namespace='password_reset')),
]
