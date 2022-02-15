FROM node:16-alpine 

# USER node 


WORKDIR /src/app


ENV PATH /app/node_modules/.bin:$PATH


COPY ./package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","run", "dev"]


