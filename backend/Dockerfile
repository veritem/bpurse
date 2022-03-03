FROM node:16-bullseye-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl

# FROM node:16-alpine

RUN npm add -g pnpm

WORKDIR /app


COPY package.json .

RUN pnpm install

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . .


EXPOSE 4002

CMD ["pnpm","dev"]
