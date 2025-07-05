# url-shortener (server)

> A URL shortener (server-side)


## Prerequisites

- Node.js 22.14.0
- Docker 28.1.1 (build 4eba377)
- Docker Compose 2.35.1
- pnpm 10.7.0


## General setup

* First, copy the `.env.example` contents into a new `.env` file at the root of the project.
* And then install the dependencies with:

```bash
pnpm install
```


## Standalone database setup

If you want to run the database container separately, you will need to:

* Start its container:

```bash
docker compose up -d db
```

* After the database is initiated, you will need to run it's migrations to create the necessary tables. For that, run:

```bash
pnpm db:migrate
```

* If for whatever reason you need to reset the DB, you can also use:

```bash
pnpm db:reset
```


## Running (standalone)

To run the server as a standalon app, execute:

```bash
pnpm start
```


## Running (Docker)

If you wish to run it through Docker, execute:

```bash
docker compose up -d
```

This will setup the server together with the database and all its migrations.


## Troubleshoot

* If you're having issues with the server container not finding the database container, try to replace the host in the `DATABASE_URL` envvar from your env file to reflect the name of the `database service` (not to be confused with the container name). You can find that in the Docker Compose file.
