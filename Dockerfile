# Use the official MongoDB image as the base image
FROM mongo:latest

# Copy the MongoDB configuration file into the container
COPY mongod.conf /etc/mongod.conf

# Set up the MongoDB admin user and password
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=secret

# Expose the default MongoDB port (27017)
EXPOSE 27017

# Start the MongoDB server with the configuration file
CMD ["mongod", "-f", "/etc/mongod.conf"]
