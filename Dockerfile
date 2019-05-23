
FROM node:alpine AS builder
ARG NPM_TOKEN

RUN apk add --update

WORKDIR /app

#COPY .npmrc .
COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#
# nginx container
#
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html

COPY --from=builder /app/dist/autobots-platform-ui /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
