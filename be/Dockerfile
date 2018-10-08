# Dockerfile for node.js server
FROM node:8

# Set working directory within container
WORKDIR /home/node/app

# Copy and run app & all dependencies
COPY . /home/node/app
CMD yarn run start:prod

# Expose port 4000
EXPOSE 4000