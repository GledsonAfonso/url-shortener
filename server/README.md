# url-shortener (server)

> A URL shortener (server-side)


## Prerequisites

- Node.js 22.14.0
- Docker 28.1.1 (build 4eba377)
- Docker Compose 2.35.1
- pnpm 10.7.0


## General setup

* First, copy the `.env.example` contents into a new `.env` file at the root of the project.
* Install the dependencies with:

```bash
pnpm install
```

* Start the DB container with:

```bash
docker compose up -d
```

* After the DB is initiated, you will need to run it's migrations to create the necessary tables. For that, run:

```bash
pnpm db:migrate
```

* If for whatever reason you need to reset the DB, you can use:

```bash
pnpm db:reset
```


## Running

To run the project execute:

```bash
pnpm start
```
