# Salesforce Portfolio

A component-based React portfolio site. Built with Vite, no extra UI libraries needed.

## Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Customizing Your Content

**All content lives in one file:** `src/data/portfolioData.js`

| Export            | What to edit                                      |
|-------------------|---------------------------------------------------|
| `META`            | Name, initials, location, email, phone, LinkedIn  |
| `HERO_TITLES`     | Typewriter strings in the hero section            |
| `HERO_BADGES`     | The three pill badges next to your avatar         |
| `ABOUT`           | Bio paragraphs + info cards                       |
| `SKILLS`          | Skill category cards + tags                       |
| `EXPERIENCE`      | Work history timeline                             |
| `CERTIFICATIONS`  | Cert count + individual cert cards                |
| `NAV_LINKS`       | Navigation items (rarely needs changing)          |

## Retheme the Site

Edit the CSS variables in `src/styles/globals.css` under `:root` to change
colors across the entire site at once:

```css
:root {
  --accent:  #3b82f6;   /* primary blue — change this to any color */
  --accent2: #60a5fa;
  --accent3: #93c5fd;
  --bg:      #0a0f1e;   /* dark navy background */
  --bg2:     #0d1428;   /* slightly lighter alt background */
}
```

## Project Structure

```
src/
├── data/
│   └── portfolioData.js        ← ✏️ Edit this file to customize content
├── hooks/
│   └── index.js                ← useTypewriter, useActiveSection
├── styles/
│   └── globals.css             ← CSS variables + shared utilities
├── components/
│   ├── Nav/                    ← Sticky nav + mobile hamburger
│   ├── Hero/                   ← Animated hero + typewriter
│   ├── About/                  ← Bio + info cards
│   ├── Skills/                 ← Skills grid
│   ├── Experience/             ← Timeline
│   ├── Certifications/         ← Cert grid
│   ├── Contact/                ← Contact cards
│   ├── Footer/                 ← Footer
│   └── SectionHeader/          ← Shared "01. Title ───" header
├── App.jsx                     ← Wires all components together
└── main.jsx                    ← Vite entry point
```

## Build for Production

```bash
npm run build    # outputs to /dist
npm run preview  # preview the production build locally
```
