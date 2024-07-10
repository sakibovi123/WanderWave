from rest_framework import serializers
from .models import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class UserAccountSerializer(serializers.ModelSerializer):
    # role = RoleSerializer(many=True, read_only=True)
    
    class Meta:
        model = UserAccount
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "password",
            "phone_number",
            "company_name",
            "is_buyer",
            "role",
            "is_active"
        ]
        
    def create(self, validated_data):
        try:
            first_name = validated_data.get("first_name")
            last_name = validated_data.get("last_name")
            email = validated_data.get("email")
            password = validated_data.get("password")
            role = validated_data.get("role")
            created_by = validated_data.get("created_at")
            existing_user = UserAccount.objects.filter(
                email=email
            )
            if not existing_user:
                user = UserAccount(
                    first_name=first_name,
                    last_name=last_name,
                    email=email
                )
                user.set_password(password)
                # if role:
                #     user.role = Role.objects.get(
                #         id=role
                #     )
                if created_by:
                    user.created_by = created_by

                user.save()
                return user
            else:
                raise serializers.ValidationError({
                "message": "User Already Exists"
            })
        except Exception as e:
            return str(e)


    
class UserAccountTokenSerializer(TokenObtainPairSerializer):
    default_error_messages = {
        "no_active_account": "Email or Password doesn't match our records",
        "incorrect_password": "Wrong password provided",
        "email_not_found": "Email doesn't match our records"
    }

    def validate(self, attrs):
        data = super().validate(attrs)
        user = self.user
        if user is None:
            raise serializers.ValidationError(self.error_messages["Email not found!"])
        if not user.check_password(attrs["password"]):
            raise serializers.ValidationError(self.error_messages['incorrect_password'])
        data["user"] = UserAccountSerializer(self.user).data
        return data


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)


class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

