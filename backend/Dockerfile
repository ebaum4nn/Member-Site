# backend/Dockerfile
FROM python:3.9-slim
ENV PYTHONUNBUFFERED 1

# Install system dependencies required for PostgreSQL, Python packages, and netcat
RUN apt-get update && \
    apt-get install -y \
    libpq-dev \
    gcc \
    netcat-openbsd

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Django project
COPY . /app

# Copy and set permissions for the entrypoint script
COPY entrypoint.sh /app/
RUN chmod +x entrypoint.sh

# Define entrypoint and command
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8000"]
