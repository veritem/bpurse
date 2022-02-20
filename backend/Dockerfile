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

RUN pnpm install

RUN pnpm dlx prisma migrate dev

EXPOSE 3000

CMD ["pnpm","dev"]
