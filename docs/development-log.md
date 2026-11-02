# Development Log

A record of the development process, completed milestones, challenges, and lessons learned while building the Heather Meyer Fine Art Portfolio.

## October 2026

### Milestone 1: Project Structure and Routing

**What I worked on:**

- Organized reusable components into `components/home` and `components/layout`.
- Created a `pages` directory for Home, About, and Collections.
- Installed and configured React Router.
- Wrapped the application in `BrowserRouter`.
- Created routes for the main website pages.
- Updated navbar links and homepage buttons to navigate between routes.

**What I learned:**

- Vite does not include built-in routing like Next.js.
- React Router handles navigation in a Vite React application.
- `BrowserRouter` provides routing functionality to the application.
- `Routes` and `Route` connect URLs to page components.
- `Link` and `NavLink` allow navigation without a full browser refresh.

**Challenges:**

- Initially had a blank page because the Collections component was missing its export.
- Needed to understand the difference between the main `App.jsx` component and individual page components.

**How I solved them:**

- Checked component imports and exports.
- Separated shared layout components from route-specific page content.
- Used React Router to connect each page to its URL.

**Next steps:**

- Finish connecting navigation links.
- Add a contact form to the About page.
- Begin planning the Supabase database structure.

### Milestone 2: About Page and Route Scroll Management

**What I worked on:**

- Created an About page.
- Built an ArtistProfile component with artist statement and biography tabs.
- Created a Contact component with controlled form inputs and submission states.
- Connected the homepage AboutCTA button to the About route.

**What I learned:**

- How to organize page content into reusable components.
- How `useState` manages tab selection and form data.
- How React Router handles navigation between pages.
- How `useLocation` identifies the current route.
- How `useEffect` can respond to route changes.
- How `window.scrollTo()` controls browser scroll position.

**Challenge encountered:**

After navigating from the homepage to the About page, the browser remained near the previous scroll position instead of returning to the top.

**Solution:**

Created a reusable `ScrollToTop` component using `useLocation` and `useEffect` to reset the scroll position when the pathname changes.

**Next steps:**

- Connect the contact form to a real submission service.
- Test navigation and section links.
- Confirm artist content and imagery with Heather.
