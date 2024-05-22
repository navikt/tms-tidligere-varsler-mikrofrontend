FROM node:20-alpine as build
ENV NODE_ENV production
WORKDIR usr/src/app
COPY server server/
COPY dist dist/
COPY dist/.vite dist/

WORKDIR /server
RUN npm install

FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /server
USER nonroot
CMD ["./server.js"]

ENV PORT=7600
EXPOSE $PORT
