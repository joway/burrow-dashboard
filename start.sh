#!/bin/sh

BURROW_BACKEND=${BURROW_BACKEND:-http://127.0.0.1}

sed -i "s~{BURROW_BACKEND}~${BURROW_BACKEND}~" /etc/nginx/nginx.conf

cat /etc/nginx/nginx.conf

nginx -g "daemon off;"
