# syntax=docker/dockerfile:1

#######
### Build stage.
FROM node:22.18 AS builder

# Install pnpm
RUN npm install -g "pnpm@10.30.2"

# Copy sources and install dependencies.
WORKDIR /dataworks/studio
COPY studio/ ./
RUN pnpm install --frozen-lockfile

# Build app for deployment.
# Also copy in static resources (normally served by a CDN).
WORKDIR /dataworks/studio/apps/web
RUN pnpm build \
  && cp -r public .next/standalone/apps/web/ \
  && cp -r .next/static .next/standalone/apps/web/.next/

#######
### Runner stage.
FROM node:22.18 AS runner

ENV NODE_ENV=production
ENV PORT=3000

# Ensure the app does not run as root.
RUN groupadd --system web \
  && useradd --system --gid web web
USER web:web

# Copy application assets from the builders.
COPY --chown=web --from=builder /dataworks/studio/apps/web/.next/standalone/ /studio/

EXPOSE $PORT
CMD ["node", "/studio/apps/web/server.js"]
