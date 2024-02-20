FROM node:16.20.2-alpine as build

ARG NODE_ENV
WORKDIR /app/React-sand-box
COPY ./ ./
RUN yarn install --frozen-lockfile --no-progress --non-interactive
RUN yarn lint
RUN yarn build --mode ${NODE_ENV}

FROM nginx:1.16.0-alpine

LABEL org.opencontainers.image.source=https://github.com/m0rgan01/react-sand-box
COPY ./static_nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/React-sand-box/build /var/www/

CMD ["nginx", "-g", "daemon off;"]