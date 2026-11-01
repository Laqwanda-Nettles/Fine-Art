# Technical Decisions

This document records important technical choices made during the development of the Heather Meyer Fine Art Portfolio.

## Frontend

### React + Vite

**Decision:** Use React with Vite for the frontend.

**Reasoning:**

- Provides a lightweight React development environment.
- Allows reusable components and a modular project structure.
- Provides experience working with React outside of Next.js.

### React Router

**Decision:** Use React Router for client-side navigation.

**Reasoning:**

- Vite does not provide built-in page routing.
- React Router allows navigation between pages without full-page reloads.
- Supports dynamic routes for future individual artwork pages.

### Tailwind CSS

**Decision:** Use Tailwind CSS for styling.

**Reasoning:**

- Allows rapid UI development.
- Makes responsive styling easier.
- Supports consistent design across components.

## Backend and Database

### Supabase

**Decision:** Use Supabase for the backend.

**Planned uses:**

- PostgreSQL database for artwork and collection information.
- Supabase Authentication for artist/admin login.
- Supabase Storage for artwork images.
- Row Level Security to protect administrative data and actions.

**Reasoning:**

- Provides database, authentication, and storage functionality in one platform.
- Offers an opportunity to learn PostgreSQL and backend security.
- Supports the goal of creating an artist-managed portfolio.

## Future Decisions

Additional decisions will be documented as the project develops.
