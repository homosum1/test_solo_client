FROM node:16

EXPOSE 8181

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

RUN npm run build-client

CMD ["npm", "run", "start-app"]