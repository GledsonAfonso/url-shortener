# ---------- Setup stage ----------
FROM node:22.17-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# ---------- Build stage ----------
FROM base AS builder

WORKDIR /app

COPY package*.json ./
COPY pnpm*.yaml ./
RUN pnpm fetch --prod

COPY . .

RUN pnpm build

# ---------- Run stage ----------
FROM base

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/generated ./generated

EXPOSE 3000

CMD ["pnpm", "start:prod"]
