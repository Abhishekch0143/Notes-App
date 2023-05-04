FROM node:19-alpine

COPY package-lock.json /app/
COPY package.json /app/
COPY src /app/

WORKDIR /app/

RUN npm install

CMD [ "node", "server.js" ]