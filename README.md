Apollo GraphQL Server + Next.js Project
---------------------------------------

This is a stack that I've been using for my web side projects. It's a single TypeScript Express app that serves both the React frontend and GraphQL backend.

Frontend:
- Next.js
- React
- Apollo Client
- SCSS

Backend:
- Postgres
- TypeORM
- Apollo Server

**Getting Started:**

1. Copy the `.env.example` file into `.env` for development mode.
2. ```yarn install```
3. Run dev server

**Build:**

```yarn build```

**Run Dev Server:**

```yarn dev```

**Run In Prod Mode:**

Set env variables in your prod environment separately (not using dotenv).

```yarn start```

**Run Jest Tests:**

```yarn test```
