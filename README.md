# cto-frontend

A glassmorphic Next.js 15 starter configured for cto.new live previews. The stack ships with TypeScript, Tailwind CSS, shadcn/ui patterns, Radix primitives, Better Auth, Supabase clients, ESLint, Prettier, and automated task-runner checks.

## Requirements

- Node.js 18.18+ (see `.nvmrc`)
- npm 9+

## Getting started

```bash
npm install
npm run dev
```

This boots the Next.js dev server on `http://localhost:3000` (0.0.0.0 binding so cto.new preview works). Hot reload is enabled by default.

## Available scripts

| Command                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `npm run dev`          | Start the local dev server with hot reload.           |
| `npm run build`        | Create a production build (runs ESLint via Next).     |
| `npm start`            | Serve the production build.                           |
| `npm run lint`         | Run ESLint with the Next.js configuration.            |
| `npm run lint:fix`     | Auto-fix lint issues.                                 |
| `npm run format`       | Format files with Prettier.                           |
| `npm run format:check` | Verify formatting.                                    |
| `npm run typecheck`    | TypeScript `tsc --noEmit`.                            |
| `npm run check`        | Convenience command that runs `lint` and `typecheck`. |

## Pre-commit automation

- `simple-git-hooks` installs Git hooks during `npm install` via the `prepare` script.
- `lint-staged` formats and lints staged files on every commit to prevent regressions.

## Environment variables

Copy `.env.example` to `.env.local` and update the values before running the app:

```bash
cp .env.example .env.local
```

| Variable                            | Purpose                                   |
| ----------------------------------- | ----------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`          | Supabase project URL.                     |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`     | Supabase public anon key.                 |
| `NEXT_PUBLIC_BETTER_AUTH_URL`       | Better Auth endpoint (e.g., `/api/auth`). |
| `NEXT_PUBLIC_BETTER_AUTH_CLIENT_ID` | Better Auth client identifier.            |

## Tech stack

- **Next.js 15** App Router, optimized for cto.new previews
- **React 18**, **TypeScript 5.6**
- **Tailwind CSS** with custom glassmorphic theme tokens
- **shadcn/ui-inspired components**, **Radix UI** primitives
- **Better Auth** and **Supabase** client helpers
- **ESLint / Prettier / TypeScript** guardrails with lint-staged pre-commit checks

## Project structure

```
src/
  app/                  # Next.js App Router (layout, pages)
  components/           # UI compositions (shadcn-inspired)
  lib/                  # Config, auth helpers, utilities
  providers/            # Global React providers
  styles/               # Global style hooks
```

## Deployment

- `npm run build` produces a production build ready for Vercel or any Node host.
- `npm start` runs the compiled app; ensure the same Node version as `.nvmrc`.

With everything wired up, you can start building new glassmorphic experiences instantly inside cto.new.
