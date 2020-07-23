FROM node:7

ADD app.js /app.js

RUN npm install --save redis
COPY ./ ./

ENTRYPOINT ["node", "app.js"]
