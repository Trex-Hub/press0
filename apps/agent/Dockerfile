# Build from monorepo root: docker build -f apps/agent/Dockerfile .
# Stage 1: Builder
FROM node:20-alpine AS builder

RUN corepack enable && corepack prepare pnpm@10.26.2 --activate

WORKDIR /app

# Copy workspace root
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copy agent app and its workspace dependencies
COPY apps/agent ./apps/agent
COPY packages/utils ./packages/utils
COPY packages/typescript-config ./packages/typescript-config

# Install all dependencies (including dev) for building
RUN pnpm install --frozen-lockfile

# Build workspace packages the agent depends on
RUN pnpm --filter @repo/utils build

# Generate Prisma client in agent app
RUN pnpm --filter agent exec prisma generate

# Build the Mastra application
RUN pnpm --filter agent build

# Prune to production dependencies (CI=true allows prune without TTY in Docker)
RUN CI=true pnpm prune --prod


# Stage 2: Runner
FROM node:20-alpine AS runner

RUN corepack enable && corepack prepare pnpm@10.26.2 --activate

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8080

# Copy workspace root (needed for pnpm resolution)
COPY --from=builder /app/package.json /app/pnpm-lock.yaml /app/pnpm-workspace.yaml ./

# Copy production node_modules and workspace packages
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/packages/utils ./packages/utils
COPY --from=builder /app/apps/agent ./apps/agent

WORKDIR /app/apps/agent

EXPOSE 8080

CMD ["node", "--import=./.mastra/output/instrumentation.mjs", ".mastra/output/index.mjs"]
