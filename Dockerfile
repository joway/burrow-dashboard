FROM joway/vue-react-nginx:latest

EXPOSE 80
COPY ./dist /app
