#!/bin/bash

# Env
echo "Node:   $(node -v)"
echo "ENV:    $NODE_ENV"

# Install dependencies
yarn install

npm rebuild node-sass --force

# Run!
exec "$@"
