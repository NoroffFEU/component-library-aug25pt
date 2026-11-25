# Project Request Modal

A modal dialog in a monochrome "card" style: big thin + black headline, a slot for another component, and two actions. Built on the native `<dialog>` element, so it works with mouse, keyboard and screen readers.

Author: Kacper Kij · Issue: #7 · Chain: Kacper → Silje → Mathilde · Design: [Figma sketch](https://www.figma.com/design/Ni3czMxRrbsUKbHyvQATY7) (section "modal v2")

## How to use

1. Copy the `<dialog class="modal">` block from `index.html` and include `style.css` and `script.js` (`defer`).
2. Give the dialog a unique `id`. Any button with `data-modal-open="that-id"` opens it.
3. Put your own component inside `.modal__slot` (see the comment in the HTML).
4. Every button inside the form closes the modal. Its `value` tells you which one was used: read `modal.returnValue` in the `close` event (`"send"`, `"cancel"`, `"close"`, `"backdrop"`).
5. Change the look through the CSS variables at the top of `style.css`.

## Keyboard

| Key | Action |
| --- | --- |
| Enter / Space on "Open modal" | Opens the modal, focus moves to the close button |
| Tab / Shift + Tab | Moves between the buttons inside the modal only |
| Esc | Closes the modal |
| Enter / Space on a button | Closes the modal with that button's value |

After closing, focus goes back to the button that opened the modal.

## Design decisions

- **Native `<dialog>` + `showModal()`** instead of a `div` with `role="dialog"`: the browser gives the backdrop, Esc, focus inside the modal and an inert page behind it, so there is no hand-written focus trap.
- **`<form method="dialog">`:** the buttons close the dialog without JavaScript and pass their `value` as `returnValue`.
- **`aria-labelledby` + `aria-describedby`** point to the title and the text, so screen readers read both when the modal opens.
- **Close on backdrop click:** a click whose target is the `<dialog>` itself (outside `.modal__inner`) closes it.
- **Focus return** to the opening button in the `close` event, for every way of closing.
- **Scroll lock** with `body:has(.modal[open])` – CSS only.
- **Strong `:focus-visible` outline** (2.5px, offset), same as in my accordion.
- **`prefers-reduced-motion`:** the open animation is switched off.
- **Anti-generic look:** Archivo with extreme weights (100 / 900), IBM Plex Mono for the small label, grain texture on the card, asymmetric two-column layout on desktop, secondary action as a text link instead of a second pill.

## Known limitations

- Only the open animation is animated; closing is instant.
- The fonts load from Google Fonts. Without them the stack falls back to Segoe UI / system fonts.
- The dark page and the "Ready to work with us?" card are only the demo around the modal.
