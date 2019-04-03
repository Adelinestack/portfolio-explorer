FROM node:11-alpine as builder

WORKDIR /client
COPY ./client/package.json ./

RUN npm install 

COPY ./client/ ./

RUN npm run build

FROM nginx:1.15.9-alpine

WORKDIR /usr/share/nginx

COPY --from=builder /client/build ./html
COPY ./nginx.conf /etc/nginx/

VOLUME /usr/share/nginx/img/


