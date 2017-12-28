FROM nginx:1.13.6-alpine

RUN mkdir -p /app
WORKDIR /app
COPY ./dist /app
COPY ./config/nginx.conf /etc/nginx/nginx.conf
COPY ./start.sh ./start.sh

EXPOSE 80

CMD ["./start.sh"]
