FROM node:18-alpine

WORKDIR /app

COPY ./app/package.json /app/package.json
RUN npm install

RUN mkdir -p /app/ui
COPY ./app /app
COPY ./ui/dist /app/ui
CMD ["npm", "start"]
