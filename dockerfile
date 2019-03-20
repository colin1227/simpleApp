FROM mhart/alpine-node:10.15.3

RUN mkdir /home/app
WORKDIR /home/app

COPY . .

CMD ["npm",  "i"]

CMD ["npm", "start"] 
