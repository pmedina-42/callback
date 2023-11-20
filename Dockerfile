FROM node:14-alpine

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "start"]
