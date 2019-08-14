FROM node:10
WORKDIR /code
COPY package.json /code
COPY package-lock.json /code
RUN npm ci
COPY . /code
RUN npm run build

FROM nginx:1.13.6-alpine
WORKDIR /app
COPY --from=0 /code/dist /app
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./start.sh ./start.sh

EXPOSE 80

CMD ["./start.sh"]
