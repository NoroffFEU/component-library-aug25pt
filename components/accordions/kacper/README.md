# Accessible FAQ Accordion

An FAQ accordion in a monochrome "card" style: numbered questions, a round `+` icon that turns into `×`, and a smooth CSS-only open/close animation. Works with mouse, keyboard and screen readers.

Author: Kacper Kij · Issue: #1 · Design: [Figma sketch](https://www.figma.com/design/Ni3czMxRrbsUKbHyvQATY7)

## How to use

1. Copy the `.accordion` block from `index.html` and include `style.css` and `script.js` (`defer`).
2. Each `.accordion__item` needs a unique pair of ids: the button's `id` / `aria-controls` and the panel's `id` / `aria-labelledby` must match.
3. To start with an item open, give it the class `accordion__item--open` and set its button to `aria-expanded="true"`.
4. Add `data-single` to `.accordion` if only one item should be open at a time. Without it, every item opens and closes independently.
5. Change the look through the CSS variables at the top of `style.css`.

## Keyboard

| Key | Action |
| --- | --- |
| Tab / Shift + Tab | Move to the next / previous question |
| Enter / Space | Open or close the focused question |
| Arrow Down / Arrow Up | Move to the next / previous question |
| Home / End | Jump to the first / last question |

## Design decisions

- **Real `<button>` inside a heading (`<h2>`):** Enter and Space work without extra JS, and screen-reader users can jump between questions with the heading shortcut.
- **`aria-expanded` + `aria-controls` + `role="region"`** follow the WAI-ARIA Accordion pattern, so screen readers announce "expanded / collapsed".
- **Grid-rows animation (`grid-template-rows: 0fr → 1fr`)** instead of `max-height` + `scrollHeight`: the height is always right, even if the content changes, and the animation is pure CSS.
- **`visibility: hidden` on closed panels:** links inside a closed answer can't be reached with Tab and aren't read out by screen readers.
- **Strong `:focus-visible` outline (2.5px, offset) around the whole card:** `.accordion__item:has(.accordion__button:focus-visible)` puts the ring around the question and its open answer, not only the button. It shows for keyboard users, not on mouse click.
- **`prefers-reduced-motion`:** animations are switched off for users who ask for less motion.
- **Two modes (`data-single` or independent)** as the ticket asks for "one at a time or independently".
- **No external dependencies:** the font stack uses Inter if it is installed and falls back to Segoe UI / system fonts.
- Visual inspiration: FAQ section by N!nhStudio (Pinterest). The content and code are my own.

## Known limitations

- The ids (`accordion-button-1`, `accordion-panel-1` …) are written by hand. With more than one accordion on a page, each one needs its own ids.
- Without JavaScript the closed answers stay hidden.
- The dark page background and gradient card are part of the demo. Copy only the `.accordion` styles if you want to place it on your own background.
