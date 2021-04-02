FROM node:15.10-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY . .
RUN npm install -g pm2
RUN npm install --production --silent
# Change the env variables to actual you need
ENV DTS_URL='ws://dts:8100'
###
EXPOSE 8101
CMD ["npm", "start"]
