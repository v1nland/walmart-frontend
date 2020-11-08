FROM node:12 AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /usr/src/app/build/ /usr/share/nginx/html
EXPOSE 80
