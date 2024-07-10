from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from datetime import date, datetime
from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
import os


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError("User must have an email!")
        
        email = self.normalize_email(email)
        email = email.lower()
        
        user = self.model(
            email=email,
            **kwargs
        )

        user.set_password(password)
        user.save(using=self._db)
        
        return user
    
    def create_superuser(self, email, password=None, **kwargs):
        user = self.create_user(
            email,
            password=password,
            **kwargs
        )
        
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save(using=self._db)
        
        return user
    

class UserAccount(AbstractBaseUser, PermissionsMixin):
    created_at = models.DateField(default=datetime.now)
    updated_at = models.DateField(default=datetime.now)
    created_by = models.PositiveBigIntegerField(null=True, blank=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    phone_number = models.CharField(max_length=255, null=True, blank=True)
    company_name = models.CharField(max_length=255, null=True, blank=True)
    
    # password = models.CharField(max_length=255, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    # buyer -> will be removed on this current hotfix release
    is_buyer = models.BooleanField(default=False, null=True, blank=True)

    # role = models.ManyToManyField(Role, blank=True)
    
    objects = UserAccountManager()
    
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]
    
    class Meta:
        ordering = ["-created_at"]
        verbose_name = "UserAccount"
        verbose_name_plural = "UserAccounts"
        
    def __str__(self):
        return self.email

    @receiver(reset_password_token_created)
    def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):
        reset_password_url = "https://staging.datahubb.io/reset-password/?token={}".format(reset_password_token.key)
        context = {
            'current_user': reset_password_token.user,
            'email': reset_password_token.user.email,
            # 'reset_password_url': "{}?token={}".format(
            #     instance.request.build_absolute_uri(reverse('password_reset:reset-password-confirm')),
            #     reset_password_token.key)
            "password_url": reset_password_url
        }

        # render email text
        email_html_message = render_to_string('email/user_reset_password.html', context=context)

        email_plaintext_message = render_to_string('email/user_reset_password.txt', context=context)
        msg = EmailMultiAlternatives(
            # title:
            "Password Reset for {title}".format(title="Datahubb"),
            # message:
            email_plaintext_message,
            # from:
            os.getenv('EMAIL_FROM')
            # to:
            [reset_password_token.user.email]
        )
        msg.attach_alternative(email_html_message, "text/html")
        msg.send()

