FROM node:14.2

# Default workdir of node
WORKDIR /usr/src/app

COPY package.json package.json

# Install dependencies
RUN npm install \
    && npm cache clean --force

COPY . .

# Run app using "npm run start"
CMD ["npm", "run", "start"]
