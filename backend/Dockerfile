FROM node:17


RUN npm add -g pnpm

WORKDIR /home/app


COPY . .


RUN pnpm install

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

ENV FASTIFY_ADDRESS=0.0.0.0

EXPOSE 4004


CMD ["pnpm","start"]
