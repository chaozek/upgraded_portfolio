# Use the official PostgreSQL image from Docker Hub
FROM postgres

# Set the password for the PostgreSQL user
ENV POSTGRES_PASSWORD="password"

# Create a Docker volume to store the PostgreSQL data
VOLUME /var/lib/postgresql/data

# Expose the PostgreSQL port to the host
EXPOSE 5432

# Start the PostgreSQL server when the container starts
CMD ["postgres"]