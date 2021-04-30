FROM node:14.16.1

WORKDIR /app

COPY package.json /app/package.json

ENV PORT 8000

RUN yarn install

COPY . /app

CMD [ "nodemon", "app.js" ]