FROM ubuntu:22.04

RUN apt update -q && \
    apt install -y -q nodejs npm

WORKDIR /opt/client

COPY package.json .
COPY package-lock.json .

RUN npm install

CMD ["/bin/sh", "-c", "npm start"]