# Dockerfile for React application

# Use a more current LTS version of Node
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Install dependencies
# Copying this separately prevents re-running npm install unless package.json changes
COPY package.json /app/
RUN npm install

# Copy the rest of the project files into the working directory
COPY . /app/

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
