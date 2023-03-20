FROM postgres:13

# Set the default environment variables
ENV POSTGRES_USER=db_user2 \
    POSTGRES_PASSWORD=db_password2

# Copy the PostgreSQL configuration files to the container
COPY ./postgresql.conf /var/lib/postgresql/data/
COPY ./pg_hba.conf /var/lib/postgresql/data/

# Expose the PostgreSQL port
EXPOSE 5432

# Set the command to run when the container starts
CMD ["postgres", "--config-file=/var/lib/postgresql/data/postgresql.conf"]