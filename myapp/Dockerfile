FROM node:14 as vue-test
WORKDIR /usr/src/app

COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:1.21.1

WORKDIR /usr/src/app
COPY --from=vue-test /usr/src/app/dist ./
COPY test.conf /etc/nginx/conf.d/default.conf
CMD ["service", "nginx", "start"]
# CMD ["nginx", "-g", "daemon off;"]
# EXPOSE 8080
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'

