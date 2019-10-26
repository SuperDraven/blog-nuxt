FROM node:alpine

# Create app directory
RUN mkdir -p /var/www
WORKDIR /var/www
ENV HOST 0.0.0.0
# Install app dependencies
COPY . /var/www
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install

# Bundle app source
#COPY laravel-echo-server.json /usr/src/app/laravel-echo-server.json

EXPOSE 30004

ENTRYPOINT ["npm", "run"]
CMD ["start"]
#CMD [ "npm", "start", "--force" ]
