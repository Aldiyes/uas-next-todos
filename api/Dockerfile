FROM node:22-alpine as base

RUN addgroup -S appgroup && adduser -S app -G appgroup
USER app

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY --chown=app:app . /app
RUN chmod 755 /app/script.sh
CMD ["/bin/sh", "-c", "./script.sh"]