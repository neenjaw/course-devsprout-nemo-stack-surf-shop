FROM mhart/alpine-node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 8080

CMD [ "nodemon", "app/server.js" ]