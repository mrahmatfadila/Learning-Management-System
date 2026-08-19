# ============================================================
# LMS Learning Management System - Production Dockerfile
# Includes: Node.js 20 + PHP 8.2 CLI + MySQL client
# Deploy to: Railway, Render, Fly.io, or any Docker host
# ============================================================

FROM node:20-alpine AS base

# Install PHP 8.x CLI and MySQL client extensions
RUN apk add --no-cache \
    php82 \
    php82-mysqli \
    php82-pdo \
    php82-pdo_mysql \
    php82-json \
    php82-mbstring \
    php82-tokenizer \
    php82-xml \
    php82-simplexml \
    php82-dom \
    php82-curl \
    php82-openssl \
    php82-fileinfo \
    php82-session \
    php82-filter \
 && ln -sf /usr/bin/php82 /usr/local/bin/php

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Build Next.js app
COPY . .
RUN npm run build

EXPOSE 3000

ENV PHP_BINARY=php
ENV NODE_ENV=production

CMD ["npm", "start"]
