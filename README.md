# NorthPeak Digital

A premium fictional digital agency website built for the Digital Heroes Web Development internship qualification task.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- React Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/       # Header, Footer
│   ├── sections/     # Page sections (Hero, Services, etc.)
│   └── ui/           # Reusable UI (Button, Container, Accordion)
├── data/             # Static content
├── hooks/            # Custom hooks
├── App.jsx           # Main app with lazy-loaded sections
├── main.jsx          # Entry point
└── index.css         # Tailwind + global styles
```

## Features

- Fully responsive (360px – 1440px+)
- Semantic HTML with ARIA labels
- Keyboard navigation and focus states
- Form validation
- Subtle Framer Motion animations
- Lazy-loaded below-the-fold sections
- Reduced motion support

## Credit

Built for [Digital Heroes Training Task](https://digitalheroesco.com)
