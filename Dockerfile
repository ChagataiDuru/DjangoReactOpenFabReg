FROM continuumio/miniconda3

WORKDIR /app

COPY environment.yaml /app/environment.yaml

RUN conda env create -f environment.yaml

SHELL ["conda", "run", "-n", "your_environment_name", "/bin/bash", "-c"]

# Add any additional commands or setup steps here if needed
# For example, you can copy your application code into the container:
# COPY . /app

# Expose any required ports
EXPOSE 8080

# Specify the command to run your application
CMD ["python", "manage.py", "runserver"]