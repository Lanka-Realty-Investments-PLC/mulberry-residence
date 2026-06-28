FROM php:8.2-fpm-alpine

RUN apk add --no-cache nginx supervisor

COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY docker/supervisord.conf /etc/supervisord.conf

WORKDIR /var/www/html
COPY . .

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
