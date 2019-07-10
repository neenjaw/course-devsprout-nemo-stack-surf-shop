FROM mhart/alpine-node:12

WORKDIR /app

COPY package*.json ./

RUN npm install --quiet

COPY . .

EXPOSE 3000

RUN npm install -g nodemon --quiet

CMD [ "nodemon", "server.js" ]