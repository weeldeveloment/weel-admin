FROM oven/bun:1.2.22 AS build

WORKDIR /app

COPY bun.lock package.json ./
RUN bun install --frozen-lockfile

COPY . .

ARG VITE_API_URL
ARG VITE_WS_URL
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_WS_URL=$VITE_WS_URL

RUN bun run build

FROM oven/bun:1.2.22-alpine

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

COPY --from=build /app/dist ./dist
COPY serve.ts ./serve.ts

EXPOSE 3000
CMD ["bun", "run", "serve.ts"]
