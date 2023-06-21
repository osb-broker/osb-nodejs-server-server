FROM node:14

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install oas3-tools
RUN npm install cors
RUN npm install @sendgrid/mail

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "index.js" ]
