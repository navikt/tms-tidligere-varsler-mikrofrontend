FROM gcr.io/distroless/nodejs20-debian12
ENV NODE_ENV production

WORKDIR usr/src/app
COPY server server/
COPY dist dist/
COPY dist/.vite dist/

WORKDIR server

CMD ["./server.js"]

ENV PORT=7600
EXPOSE $PORT
