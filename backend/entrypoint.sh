#!/bin/bash

# Wait for PostgreSQL to be ready
echo "Waiting for PostgreSQL to start..."
while ! nc -z db 5432; do
  sleep 0.1
done
echo "PostgreSQL started"

# Make Migrations
echo "Applying make migrations..."
python manage.py makemigrations

# Apply database migrations
echo "Applying database migrations..."
python manage.py migrate
python manage.py migrate myapp

# Create users
echo "Applying create users..."
python manage.py create_users
python manage.py makemigrations myapp

# Start Gunicorn server
exec gunicorn myproject.wsgi:application --bind 0.0.0.0:8000 --timeout 300 --workers 4
