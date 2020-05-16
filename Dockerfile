FROM node:14.2

# Default workdir of node
WORKDIR /usr/src/app

COPY package.json package.json

# Install dependencies
RUN npm install \
    && npm cache clean --force

COPY . .

# ENV variable for port
ENV PORT=3000
# ENV variable for RajaOngkir API Key
ENV RAJAONGKIR_APIKEY=0df6d5bf733214af6c6644eb8717c92c
# ENV variable for RajaOngkir URL
ENV RAJAONGKIR_URL=https://api.rajaongkir.com/starter

# Run app using "npm run start"
CMD ["npm", "run", "start"]
