# Component Library

A shared collection of vanilla HTML, CSS, and JavaScript UI components built collaboratively by students.

## Getting started

1. Clone this repo
2. Open `index.html` in your browser.
3. Browse components using the sidebar menu

## How it works

- The sidebar menu lists component types (buttons, cards, modals, etc.)
- Click a type to see all components in that category
- Each component is displayed in an iframe so styles don't leak between them
- Components are registered in `components/components.js`

## Adding a component

1. Pick a component type
2. Create a branch (`feature/{type}-{your-name}`)
3. Create your folder under `components/{type}/{your-name}/`
4. Build your component (HTML, CSS, JS)
5. Register it in `components/components.js`
6. Open a pull request

## Folder structure

```
components/
  buttons/
    example-neon/          ← reference example
    your-name/             ← your component
      index.html
      style.css
      script.js
      README.md
  cards/
    ...
  (20 types total)
```

## Rules

- Vanilla HTML, CSS, and JavaScript only
- No frameworks, no npm, no build tools
- Every component must have its own `index.html` that works standalone
- Every merge into main goes through a pull request
