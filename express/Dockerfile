FROM node:14.16.1

WORKDIR /app

ENV PORT 8000

COPY ./express/package.json /app/package.json

RUN yarn install

COPY ./express /app

CMD [ "yarn", "start" ]