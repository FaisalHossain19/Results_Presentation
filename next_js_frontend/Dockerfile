# Use the Node.js 18 Alpine image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for dependencies
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of your Next.js code
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port the frontend will run on (3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
