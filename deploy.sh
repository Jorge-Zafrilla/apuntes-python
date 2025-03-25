#!/bin/bash

# Build the project
npm run build

# Navigate into the build output directory
cd build

# Initialize a new Git repository and add all files
git init
git add -A

# Commit the changes
git commit -m 'deploy'

# If you're deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:Jorge-Zafrilla/apuntes-python.git apuntes-python:gh-pages

cd -
