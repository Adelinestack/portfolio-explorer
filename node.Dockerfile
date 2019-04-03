FROM node:11-alpine

WORKDIR /app/server/

EXPOSE 4000

COPY ./server/ .

VOLUME /app/server/img/

RUN npm install

CMD ["node", "index.js"]


