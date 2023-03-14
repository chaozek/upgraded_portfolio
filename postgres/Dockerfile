FROM postgres:13

# Set the default environment variables
ENV POSTGRES_USER=db_user2 \
    POSTGRES_PASSWORD=db_password2

# Expose the PostgreSQL port
EXPOSE 5432

# Set the command to run when the container starts
CMD ["postgres", "-c", "config_file=/etc/postgresql/postgresql.conf"]
