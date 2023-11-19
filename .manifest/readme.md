# 構成

``` Dockerfile
FROM ruby:3.1.2

RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs vim libedit-dev bash
SHELL [ "/bin/bash", "-c" ]

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update && apt-get install -y yarn

RUN mkdir /app
WORKDIR /app
ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock
RUN bundle install
ADD . /app
```

docker-compose.yml

``` yml
version: '3.8'

services:
  db:
    image: mysql:8.0
    ports:
      - '3306:3306'
    volumes:
      - ./mysql_volume:/var/lib/mysql
    environment:
      MYSQL_DATABASE: app
      MYSQL_USER: user
      MYSQL_PASSWORD: password
      MYSQL_ROOT_PASSWORD: password
    restart: always

  web:
    build: .
    command: bash -c "rm -f tmp/pids/server.pid && bundle exec rails s -p 3000 -b '0.0.0.0'"
    volumes:
      - .:/app
    ports:
      - "3000:3000"
    restart: always
    tty: true
    stdin_open: true
    depends_on:
      - db
volumes:
  mysql_volume:
```

Gemfile

``` Gemfile
source "https://rubygems.org"
gem "rails", "~> 7.0.8"
```

Gemfile.lock

``` lock

```

## 実行コマンド

``` sh
docker-compose run web rails new . --force --database=mysql --skip-bundle --webpack=react

yarn add typescript @types/react @types/react-dom
yarn add bootstrap
yarn add @popperjs/core


app/javascript/packs/application.jsに
import 'bootstrap/dist/css/bootstrap.css'を追加します。
```

``` sh
docker-compose run web rails new . --force --database=mysql --skip-bundle
```
