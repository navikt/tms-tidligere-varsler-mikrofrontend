FROM node:20-alpine as build
WORKDIR usr/src/app
COPY server server/
COPY dist dist/
COPY dist/.vite dist/

WORKDIR server
RUN npm install

FROM gcr.io/distroless/nodejs20-debian12
ENV NODE_ENV production

CMD ["./server.js"]

ENV PORT=7600
EXPOSE $PORT
