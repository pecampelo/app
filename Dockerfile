FROM node:16-slim

RUN apt-get update \
    apt-get install git

WORKDIR /trio-bridge-demo
COPY . /trio-bridge-demo

RUN npm ci
RUN npm run build

CMD npm run dev

