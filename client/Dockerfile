FROM node:16.6-alpine3.11
RUN npm install -g pnpm && mkdir -p /app
WORKDIR /app
COPY package.json pnpm.* ./
RUN pnpm install
COPY . ./

CMD ["pnpm", "dev"]
