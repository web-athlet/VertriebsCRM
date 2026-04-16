# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server
npm run build     # TypeScript check + Next.js build
npm run start     # Start production server
npm run lint      # ESLint (next/core-web-vitals rules)
npm run format    # Prettier formatting on src/**
```

There are no tests in this project.

## Stack

- **Next.js 16** with App Router, **React 18**, **TypeScript 5**
- **NextAuth 4** for auth (demo credentials: `demo@user.com` / `123456`)
- **Bootstrap 5** + **React Bootstrap** + **SCSS** for styling
- **ApexCharts** for charts, **FullCalendar** for calendar, **GridJS** for tables
- **React Hook Form** + **Yup** for form validation

## Architecture

This is a real estate admin dashboard template ("Lahomes") with **no backend** — all data is mock data.

### Route Groups

- `src/app/(admin)/` — protected dashboard routes (requires auth)
- `src/app/(other)/auth/` — public auth pages (sign-in, sign-up, reset password)
- `src/middleware.ts` — redirects `/` to `/dashboards/analytics`

### Provider Hierarchy

`AppProvidersWrapper` (`src/components/wrappers/AppProvidersWrapper.tsx`) wraps the entire app with:
- `SessionProvider` (NextAuth)
- `LayoutProvider` (theme, topbar, sidebar customization state)
- `NotificationProvider` (toast notifications)

The admin layout adds `AuthProtectionWrapper` which checks NextAuth session and redirects unauthenticated users.

### State Management

Three React Contexts handle global UI state:
- **LayoutContext** (`src/context/useLayoutContext.tsx`) — theme mode (light/dark), topbar/menu themes, sidebar size, offcanvas states (theme customizer, activity stream)
- **ChatContext** (`src/context/useChatContext.tsx`) — active chat, offcanvas states for chat UI panels
- **EmailContext** (`src/context/useEmailContext.tsx`) — active email label, compose/detail offcanvas

### Data Flow

Mock data lives in `src/assets/data/*.ts` files. `src/helpers/data.ts` contains async wrapper functions that fetch and transform this data (simulating API calls). Components call these helpers directly.

TypeScript types for domain models (User, Agent, Customer, Property, Transaction, etc.) are in `src/types/`.

### Path Alias

`@/*` maps to `src/*` — use `@/components/...`, `@/types/...`, etc.

## Prettier Config

`printWidth: 150`, `semi: false`, `singleQuote: true`, `trailingComma: "all"` — run `npm run format` before committing.
