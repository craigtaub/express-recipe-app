FROM google/nodejs
MAINTAINER Craig Taub "craigtaub@gmail.com"

WORKDIR /app
ADD package.json /app/
RUN npm install
ADD . /app

CMD []
ENTRYPOINT ["/nodejs/bin/npm", "start"]
