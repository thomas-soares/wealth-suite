# Wealth Suite

Wealth Suite is a demonstrative wealth relationship management platform for assessors and clients.

## Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS, and semantic design tokens.
- Package manager: pnpm.
- Code quality: ESLint and Prettier.

## Repository layout

```text
frontend/       Next.js App Router application
fixtures/       Deterministic synthetic demo data
config/         Local configuration
```

## Frontend setup

```bash
cd frontend
pnpm install
pnpm dev
```

Available frontend scripts:

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm format
pnpm format:check
pnpm typecheck
```

## Data safety

All data in this repository is synthetic and intended only for demonstrations and tests. Never add real customer information, credentials, access tokens, or production exports.

## Theme behavior

The interface supports `light`, `dark`, and `system` modes. `system` follows the operating-system preference. An explicit user preference overrides that value and is persisted locally. Missing or invalid preferences normalize safely to `system`.
