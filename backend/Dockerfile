FROM node:16 

FROM node:16-alpine

RUN npm add -g pnpm

WORKDIR /app


COPY package.json .

RUN pnpm install

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN pnpm install

EXPOSE 3000

CMD ["pnpm","dev"]
