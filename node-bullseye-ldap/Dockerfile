FROM node:16.20.0-bullseye
RUN apt-get update && apt-get install -y ldap-utils vim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8084
CMD [ "node", "server.js" ]
