FROM node:22-alpine

RUN addgroup -S appgroup && adduser -S app -G appgroup
USER app

WORKDIR /app
COPY package.json ./
RUN npm install

COPY --chown=app:app . /app
CMD npx next dev -H client -p 3000