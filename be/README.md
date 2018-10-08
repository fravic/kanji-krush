Backend Prisma Server with NodeJS Proxy
=======================================
A prisma server with a nodejs proxy to facilitate SSL. To set up, place SSL certs under ./certs.

Prisma Server
------------
Make sure to copy `.env.example` into `.env` to run dev mode. Also ensure that no competing Docker processes are running.

**Examine the docker-compose config for an environment:**

```yarn docker-compose:[dev|prod] config```

Run `yarn docker-compose:dev` to see all available docker-compose commands.

**Deploy Prisma Server:**

```yarn docker-compose:[dev|prod] up -d```

**Deploy schema changes:**

First make sure there is a prisma service initialized. Run `yarn prisma:dev` to see all available prisma commands.

```yarn prisma:[dev|prod] deploy```

This will also generate a new `schema/prisma.graphql` and `schema/prisma.ts` (via prisma-binding).

```yarn prisma:[dev|prod] generate```

**Get an auth token:**

```yarn prisma:[dev|prod] token```

You'll need to use pass this token as a HTTP header to make graphql requests against Prisma (in the Playground). eg:

```
{
  "Authorization": "Bearer TOKEN_HERE"
}
```

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