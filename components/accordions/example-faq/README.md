# FAQ Accordion

A click-to-expand accordion with smooth height animation. Only one item can be open at a time.

## How to use

Copy the `.accordion` HTML structure and include both `style.css` and `script.js`. Add or remove `.accordion__item` blocks as needed. The JavaScript handles opening and closing.

## Design decisions

- `max-height` transition for smooth open/close animation
- Only one item open at a time — clicking a new one closes the previous
- The `+` icon rotates 45 degrees to become an `x` when open
- Uses `scrollHeight` to calculate the correct expanded height

## Known limitations

- Content height is calculated once on click — if the content changes dynamically, the height won't update
- No keyboard navigation between items (arrow keys)
