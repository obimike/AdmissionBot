FROM node:16.10-alpine as build

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# FROM nginx:alpine

# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /app/build /usr/share/nginx/html


FROM httpd:alpine

COPY --from=build /app/build /usr/local/apache2/htdocs/


# FROM node:16.10-alpine
# WORKDIR /app
# COPY package.json ./
# RUN npm install
# COPY . .
# CMD ["npm", "start"]