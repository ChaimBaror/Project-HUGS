FROM node:14.15.4 as builder
WORKDIR /user/apps/hugs
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8443
CMD npm start 