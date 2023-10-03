# Use an official Node.js runtime as a parent image
FROM node:20.6.1

# Set the working directory in the container
WORKDIR /

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of your application code to the container
COPY . .

# Expose the port your app will run on
EXPOSE 3000

# Define the command to run your Node.js application
CMD [ "npm", "start" ]
