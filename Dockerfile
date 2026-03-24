FROM php:8.2-fpm-alpine

RUN apk add --no-cache \
    nginx \
    supervisor \
    curl \
    libzip \
    zip \
    unzip

RUN docker-php-ext-install pdo pdo_mysql pdo_sqlite zip opcache

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY docker/nginx.conf /etc/nginx/http.d/default.conf
COPY docker/supervisord.conf /etc/supervisord.conf

WORKDIR /var/www/html

COPY . .

RUN chmod -R 755 /var/www/html \
    && chmod -R 755 /var/www/html/lib \
    && chmod -R 755 /var/www/html/css \
    && chmod -R 755 /var/www/html/js \
    && chmod -R 755 /var/www/html/img

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
