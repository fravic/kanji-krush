ChartCat Backend
=================
A prisma server with a nodejs proxy to facilitate SSL. To set up, place SSL certs under ./certs.

Prisma Server
------------
Make sure to copy `.env.example` into `.env` to run dev mode.

**Examine the docker-compose config for an environment:**

```yarn docker-compose:[dev|prod] config```

Run `yarn docker-compose:dev` to see all available docker-compose commands.

**Deploy Prisma Server:**

```yarn docker-compose:[dev|prod] up -d```

**Deploy schema changes:**

First make sure there is a prisma service initialized. Run `yarn prisma:dev` to see all available prisma commands.

```yarn prisma:[dev|prod] deploy```

**Get an auth token:**

```yarn prisma:[dev|prod] token```

**GraphQL Playground:**

First start /fe server on port 4000.

```yarn graphql:dev playground```


NodeJS Proxy
------------
**Build:**

```yarn docker-compose:[dev|prod] build node```

This just copies all files from local directory into a Docker container.


**Deploy:**

```yarn docker-compose:[dev|prod] up -d node```