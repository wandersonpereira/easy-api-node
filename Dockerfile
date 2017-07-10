FROM node:boron 

# Create app directory 
RUN mkdir - p /usr/src/app 
WORKDIR /usr/src/app 

# Install app dependencies 
COPY package.json /usr/src/app/ 
RUN cd /usr/src/app && npm install 
RUN cd /usr/src/app && npm install --dev

# Bundle app source 
COPY . /usr/src/app 

#COPY /bin/sqlite3 /bin/

EXPOSE 3117 

CMD [ "npm" , "start"] 
