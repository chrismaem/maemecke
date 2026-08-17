# Personal Portfolio — Product Manager

A minimal, responsive single-page portfolio built with **React**, **Vite**, and **Tailwind CSS v4**. Features smooth scroll-reveal animations (Framer Motion), dark mode, and a sticky navigation bar.

---

## Tech Stack

| Layer       | Technology            |
| ----------- | --------------------- |
| Framework   | React 19              |
| Build tool  | Vite 6               |
| Styling     | Tailwind CSS v4       |
| Animations  | Framer Motion         |
| Deployment  | Static (any CDN/host)|

---

## Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9 (or pnpm / yarn)

---

## Local Setup

```bash
# 1. Clone the repo (or navigate to the project folder)
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**.

---

## Available Scripts

| Command           | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start local development server     |
| `npm run build`   | Build for production (`dist/`)     |
| `npm run preview` | Preview production build locally   |

---

## Production Build

```bash
npm run build
```

This generates a static `dist/` folder you can deploy to any static hosting service (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).

---

## Project Structure

```
Portfolio/
├── public/
│   └── favicon.svg            # Site favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky nav with dark mode toggle
│   │   ├── Hero.jsx           # Hero section with CTA
│   │   ├── About.jsx          # Bio + placeholder photo
│   │   ├── Experience.jsx     # Vertical timeline
│   │   ├── Skills.jsx         # Skill tags by category
│   │   ├── Projects.jsx       # Project cards with impact tags
│   │   ├── Testimonials.jsx   # Quote cards
│   │   ├── Contact.jsx        # Email, LinkedIn, GitHub links
│   │   ├── Footer.jsx         # Simple footer
│   │   └── Section.jsx        # Reusable section wrapper with scroll reveal
│   ├── context/
│   │   └── ThemeContext.jsx   # Dark mode state (localStorage + system pref)
│   ├── hooks/
│   │   └── useScrollReveal.js # Intersection Observer hook
│   ├── App.jsx                # Root layout — composes all sections
│   ├── main.jsx               # Entry point — wraps with ThemeProvider
│   └── index.css              # Tailwind imports + custom theme tokens
├── index.html                 # HTML shell (Google Fonts, smooth scroll)
├── vite.config.js             # Vite + Tailwind plugin
├── package.json
└── README.md
```

---

## Customisation

All placeholder content lives directly in the component files inside `src/components/`. To personalise:

1. **Hero** — update name, title, tagline in `Hero.jsx`
2. **About** — swap bio text and add your photo in `About.jsx`
3. **Experience** — edit the `experiences` array in `Experience.jsx`
4. **Skills** — modify `skillCategories` in `Skills.jsx`
5. **Projects** — update `projects` array in `Projects.jsx`
6. **Testimonials** — replace quotes in `Testimonials.jsx`
7. **Contact** — set real URLs in `Contact.jsx`
8. **Colors** — adjust the `@theme` block in `src/index.css`

---

## License

MIT — free to use and modify.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
