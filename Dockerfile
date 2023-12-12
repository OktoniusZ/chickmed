FROM php:8.1-fpm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo_mysql

WORKDIR /app

COPY composer.json .
COPY composer.lock .
CMD composer install --no-scripts

COPY . .

# Install npm packages and run npm dev
CMD which npm > cat /dev/null 2>&1
# RUN npm install && npm run dev

# CMD php artisan serve --host=0.0.0.0 --port 80
