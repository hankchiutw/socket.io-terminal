# socket.io-terminal

FROM phusion/baseimage
MAINTAINER Hank hankchiu.tw@gmail.com

# install required library
RUN curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
RUN apt-get update && apt-get install -y nodejs git python build-essential
RUN npm i -g pm2 mocha concurrently

# Project source code
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm i

# create boot script
ENV NODE_ENV dev
ENV NODE_PATH /app
RUN mkdir /etc/service/app
#RUN echo "#!/bin/bash\npm2 start /app/ecosystem.json" >> /etc/service/app/run
RUN echo "#!/bin/bash\nnode /app/app.js" >> /etc/service/app/run
RUN chmod a+x /etc/service/app/run

EXPOSE 80

# Clean up APT when done.
#RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# boot
CMD ["/sbin/my_init"]
