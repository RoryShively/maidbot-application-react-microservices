FROM node:8

# Install yarn!
RUN npm install yarn -g

# Entrypoint
COPY ./scripts/entrypoint.sh /

# Node base template
WORKDIR /app

# Set the entrypoint
# ENTRYPOINT ["/entrypoint.sh"]
RUN \
  yarn install && \
  npm rebuild node-sass --force

CMD ["node"]
