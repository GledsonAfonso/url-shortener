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

RUN pnpm add -g serve

COPY --from=builder /app/dist .

EXPOSE 5173

CMD ["serve", "-s", ".", "-l", "5173"]
