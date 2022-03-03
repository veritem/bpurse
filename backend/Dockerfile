FROM node:16-bullseye-slim as base

# Install openssl for Prisma
RUN apt-get update && apt-get install -y openssl


RUN npm add -g pnpm

WORKDIR /usr/app 


COPY . .


RUN pnpm install

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

ENV FASTIFY_ADDRESS=0.0.0.0

EXPOSE 4004

CMD ["pnpm","dev"]
