FROM node:22.1.0-alpine

WORKDIR /app

COPY ./api/package.json ./api/package-lock.json* ./

RUN npm install

COPY ./api .

EXPOSE 17000

CMD ["npm", "start"]
