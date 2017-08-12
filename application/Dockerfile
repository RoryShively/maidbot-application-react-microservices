FROM node:6

# Install yarn!
RUN npm install yarn -g

# Entrypoint
COPY ./scripts/entrypoint.sh /

# Node base template
WORKDIR /app

# Set the entrypoint
ENTRYPOINT ["/entrypoint.sh"]

CMD ["node"]
