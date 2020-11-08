# Walmart frontend

Simple frontend development, made for Walmart Challenge using create-react-app

First of all, copy and configurate .env variables:

```
cp .env.example .env
```

## Install

To install all dependencies, use the following command in the command prompt:

```
npm install
```

## Usage

To start the backend server (run index.js), use the following command in the command prompt:

```
npm start
```

## Testing

To run tests made with cypress, use the following command in the command prompt:

```
npx cypress run
```

If you want the tests to be interactive, use the following command in the command prompt:

```
npx cypress open
```

## Docker

To create the docker image, use the following command in the command prompt:

```
docker build -t walmart-frontend .
```

To run container, use the following command in the command prompt:

```
docker run -d -p 8080:80 walmart-frontend
```
