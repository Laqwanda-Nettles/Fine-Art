# React Router with Vite

## Overview

Vite is a frontend build tool that helps create and run React applications. Unlike Next.js, Vite does not include built-in page routing.

To navigate between pages in a React application built with Vite, you can use **React Router**.

React Router allows users to navigate between pages without refreshing the entire browser window.

This project uses React Router's Declarative Mode.

## 1. Install React Router

Since this project uses Bun as its package manager, install React Router with:

```bash
bun add react-router
```

**Note:** This project follows the current React Router v7 documentation. Older tutorials may use `react-router-dom` instead.

## 2. Set Up BrowserRouter

Before creating routes, the application needs to be wrapped in `BrowserRouter`.

Open `src/main.jsx`:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
```

### What does BrowserRouter do?

`BrowserRouter` makes routing available throughout the React application.

Think of it as the system that keeps track of the current URL and tells React which page should be displayed.

Without it, React Router components such as `Routes`, `Route`, and `NavLink` won't work.

## 3. Organize Page Components

Create a `pages` folder inside `src`.

Each page should have its own component.

Example:

```text
src/
├── components/
│   ├── home/
│   └── layout/
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Collections.jsx
├── App.jsx
└── main.jsx
```

A page component can combine multiple smaller components.

Example: `Home.jsx`

```jsx
import Hero from "../components/home/Hero";
import Featured from "../components/home/Featured";
import CuratedCollection from "../components/home/CurratedCollection";
import AboutCTA from "../components/home/AboutCTA";

function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <CuratedCollection />
      <AboutCTA />
    </main>
  );
}

export default Home;
```

The Home page brings together the components that make up the homepage.

## 4. Set Up Routes in App.jsx

Import the page components and React Router components.

```jsx
import { Routes, Route } from "react-router";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Banner from "./components/layout/Banner";

import Home from "./pages/Home";
import About from "./pages/About";
import Collections from "./pages/Collections";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Banner />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
```

### Understanding Routes and Route

**Routes**

`Routes` is the container that looks at the current URL and finds the matching route.

**Route**

Each `Route` connects a URL path to a component.

For example:

```jsx
<Route path="/" element={<Home />} />
```

This tells React Router:

- If the URL is `/`, display the Home component.
- If the URL is `/about`, display the About component.
- If the URL is `/collections`, display the Collections component.

The `element` prop specifies which component should render.

### Why are Navbar and Footer outside Routes?

The Navbar and Footer are shared layout components.

They should remain visible when users navigate between pages.

The Routes section changes the page content while the shared layout stays in place.

## 5. Add Navigation to Navbar

To navigate between routes, import `NavLink`:

```jsx
import { NavLink } from "react-router";
```

Then replace regular page-navigation anchors with `NavLink`.

```jsx
<ul>
  <li>
    <NavLink to="/" end>
      HOME
    </NavLink>
  </li>

  <li>
    <NavLink to="/collections">COLLECTION</NavLink>
  </li>

  <li>
    <NavLink to="/about">ABOUT</NavLink>
  </li>
</ul>
```

### What is NavLink?

`NavLink` works similarly to a regular link, but it also knows when its destination matches the current page.

This makes it useful for navigation menus because you can style the active page differently.

The `end` prop on the Home link means it should only be active when the URL is exactly `/`.

### Link vs. NavLink

| Component | Purpose                                               |
| --------- | ----------------------------------------------------- |
| `Link`    | Navigate between routes                               |
| `NavLink` | Navigate between routes and identify the active route |
| `<a>`     | External links or traditional page/section links      |

Use `NavLink` for the main navigation menu when you want active-link styling.

## 6. Add Navigation to Buttons

You can use `Link` or `NavLink` for elements that look like buttons but navigate to another page.

Example:

```jsx
import { NavLink } from "react-router";

<NavLink
  to="/collections"
  className="inline-block bg-[#6b7a4e] px-6 py-3 text-amber-50 rounded-md"
>
  Explore Collection
</NavLink>;
```

You don't need to put a `<button>` inside the `NavLink`.

Instead, style the link itself to look like a button.

### When should I use a button?

Use a regular `<button>` when the user is performing an action rather than navigating.

Examples:

- Moving to the next image in a carousel.
- Opening a mobile navigation menu.
- Submitting a contact form.
- Updating a counter.

**Remember:**

- Navigation = `Link` or `NavLink`.
- Actions = `<button>`.

## 7. Navigate to a Section on Another Page

Sometimes you want a link to navigate to a specific section rather than just the top of a page.

For example, the INQUIRE link should take visitors to the contact form on the About page.

In the Navbar:

```jsx
<NavLink to="/about#contact">INQUIRE</NavLink>
```

In `About.jsx`:

```jsx
<section id="contact">
  <h2>Get in Touch</h2>
  {/* Contact form goes here */}
</section>
```

The `#contact` portion identifies the section by its ID.

## 8. Dynamic Routes

React Router also supports dynamic routes.

For example, eventually each artwork could have its own detail page:

```jsx
<Route path="/artwork/:id" element={<ArtworkDetails />} />
```

The `:id` represents a value that changes depending on which artwork the visitor selects.

Inside `ArtworkDetails.jsx`, retrieve the ID with `useParams`:

```jsx
import { useParams } from "react-router";

function ArtworkDetails() {
  const { id } = useParams();

  return (
    <main>
      <h1>Artwork Details</h1>
      <p>Artwork ID: {id}</p>
    </main>
  );
}

export default ArtworkDetails;
```

Later, this ID can be used to retrieve the corresponding artwork from Supabase.

## 9. Common Routing Issues

| Problem                                          | What to check                                                           |
| ------------------------------------------------ | ----------------------------------------------------------------------- |
| Blank page                                       | Check the browser console for errors.                                   |
| Route doesn't display                            | Make sure the component is imported and exported correctly.             |
| Navigation doesn't work                          | Check the `to` path against the `Route` path.                           |
| React Router error                               | Make sure `App` is wrapped in `BrowserRouter`.                          |
| Import error                                     | Check file names, spelling, capitalization, and relative paths.         |
| Page works through navigation but not on refresh | Check that your hosting provider supports SPA fallback to `index.html`. |

### Important: Hosting

When deploying a Vite application, configure your hosting provider to serve `index.html` for application routes that don't correspond to actual files.

This allows visitors to refresh or directly open URLs such as `/about` and `/collections`.

## Quick Reference

```jsx
// Import routing components
import { Routes, Route, Link, NavLink } from "react-router";

// Define routes
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/collections" element={<Collections />} />
</Routes>

// Navigate to a route
<Link to="/about">About</Link>

// Navigate with active-route awareness
<NavLink to="/collections">Collections</NavLink>

// Navigate to a section on another page
<NavLink to="/about#contact">Inquire</NavLink>

// Dynamic route
<Route path="/artwork/:id" element={<ArtworkDetails />} />
```

## Resources

- [React Router Documentation](https://reactrouter.com/)
- [React Router Installation](https://reactrouter.com/start/declarative/installation)
- [React Router Routing](https://reactrouter.com/start/declarative/routing)
- [React Router Navigation](https://reactrouter.com/start/declarative/navigating)

---

**Learning takeaway:** Vite handles the development and build process, React handles the components and UI, and React Router handles navigation between pages. These tools work together, but each has a different responsibility.
