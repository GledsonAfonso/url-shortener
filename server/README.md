# url-shortener (server)

> A URL shortener (server-side)


## General setup

* First, copy the `.env.example` contents into a new `.env` file at the root of the project. Update the values if needed
  * If you intent on running the server without Docker, set the `DATABASE_HOST` envvar to `localhost`. Otherwise, set it to the same name as the database `service name` located in the Docker Compose file

* Then, install the dependencies with:

```bash
pnpm install
```


## Standalone database setup

If you want to run the database container separately, you will need to:

* Start its container:

```bash
docker compose --env-file ./.env up -d db
```

* After the database is initiated, you will need to run it's migrations to create the necessary tables. To do that, run:

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
docker compose --env-file ./.env up -d
```

This will setup the server together with the database and all its migrations.
