# Use the official Node.js image with Alpine Linux as the base image
FROM node:alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build your React application (replace this with your build script if needed)
RUN npm run build

# Expose the port your React app will run on (typically 3000)
EXPOSE 3000

# Specify the command to start your React app
CMD ["npm", "start"]