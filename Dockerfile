# Production multi-stage Dockerfile for Vite-built frontend (Bun runtime for Dokploy)

# --- Build stage (Bun) ---
FROM oven/bun:1.2.22 AS build
LABEL stage=builder

WORKDIR /app

# Install dependencies first to leverage Docker layer cache
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source files and build with Vite
COPY . .

# Accept build-time overrides for Vite envs
ARG VITE_API_URL=""
ARG VITE_WS_URL=""
ARG CACHEBUST=""
ARG DEPLOY_VERSION=""
ENV VITE_API_URL=${VITE_API_URL} \
    VITE_WS_URL=${VITE_WS_URL} \
    DEPLOY_VERSION=${DEPLOY_VERSION} \
    NODE_ENV=production

# Use CACHEBUST arg to force rebuild when CI provides a new value
RUN echo "cachebust=$CACHEBUST"

# Write deploy version so serve.ts can use it as a cache-busting token
RUN echo "${DEPLOY_VERSION}" > /app/.deploy-version

# Build the app
RUN bun run build

# --- Runtime stage (Bun) ---
FROM oven/bun:1.2.22-alpine AS runtime
LABEL stage=runtime

WORKDIR /app

# Copy built assets and serve script
COPY --from=build /app/dist ./dist
COPY --from=build /app/.deploy-version ./.deploy-version
COPY serve.ts ./serve.ts

ENV PORT=3000

EXPOSE 3000

CMD ["bun", "run", "serve.ts"]
