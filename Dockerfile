FROM node:20.18.0
WORKDIR /home/node/app
COPY package.json package-lock.json ./
COPY tsconfig.json .
COPY src ./src
RUN npm install -g pnpm
RUN pnpm install

ENV PORT=31302
ENV GCP_PROJECT_ID=storied-imprint-441522-s7

EXPOSE 31302
CMD [ "pnpm", "start"]