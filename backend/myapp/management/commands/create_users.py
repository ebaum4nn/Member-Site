# your_app/management/commands/create_users.py

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.db.utils import IntegrityError
import os

class Command(BaseCommand):
    help = 'Creates or updates a superuser and an API user with all permissions'

    def handle(self, *args, **options):
        super_username = os.getenv('SUPERUSER_USERNAME', 'super')
        super_email = os.getenv('SUPER_EMAIL', 'super@user.com')
        super_password = os.getenv('SUPERUSER_PASSWORD', 'defaultsuperpassword')
        super_first_name = os.getenv('SUPERUSER_FIRST_NAME', 'Super')
        super_last_name = os.getenv('SUPERUSER_LAST_NAME', 'User')

        api_username = os.getenv('APIUSER_USERNAME', 'user')
        api_email = os.getenv('API_EMAIL', 'normal@user.com')
        api_password = os.getenv('APIUSER_PASSWORD', 'defaultapipassword')
        api_first_name = os.getenv('APIUSER_FIRST_NAME', 'User')
        api_last_name = os.getenv('APIUSER_LAST_NAME', 'User')

        # Handle the superuser creation or update
        superuser, created = User.objects.get_or_create(username=super_username, defaults={
            'email': super_email,
            'first_name': super_first_name,
            'last_name': super_last_name
        })
        if created:
            superuser.set_password(super_password)
            superuser.is_superuser = True
            superuser.is_staff = True
            superuser.save()
            self.stdout.write(self.style.SUCCESS(f'Successfully created superuser: {super_username}'))
        else:
            superuser.email = super_email
            superuser.first_name = super_first_name
            superuser.last_name = super_last_name
            superuser.set_password(super_password)  # Optionally reset password
            superuser.save()
            self.stdout.write(self.style.SUCCESS(f'Successfully updated superuser: {super_username}'))

        # Handle the API user creation or update
        api_user, created = User.objects.get_or_create(username=api_username, defaults={
            'email': api_email,
            'first_name': api_first_name,
            'last_name': api_last_name
        })
        if created:
            api_user.set_password(api_password)
            api_user.is_superuser = True
            api_user.is_staff = True
            api_user.save()
            self.stdout.write(self.style.SUCCESS(f'Successfully created API user with all permissions: {api_username}'))
        else:
            api_user.email = api_email
            api_user.first_name = api_first_name
            api_user.last_name = api_last_name
            api_user.set_password(api_password)  # Optionally reset password
            api_user.is_superuser = True  # Ensure the user retains superuser status
            api_user.is_staff = True
            api_user.save()
            self.stdout.write(self.style.SUCCESS(f'Successfully updated API user: {api_username}'))
