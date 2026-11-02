# Menu Dropdown

A click-to-open dropdown menu with smooth fade-in animation.

## How to use

Copy the `.dropdown` HTML structure and include `style.css` and `script.js`. Add or remove `<a class="dropdown__item">` links as needed. Use the `dropdown__divider` class for a separator line.

## Design decisions

- Opens on click (not hover) — more intentional and mobile-friendly
- Closes when clicking anywhere outside the dropdown
- Uses `opacity` + `transform` for a smooth appear animation
- `pointer-events: none` on the hidden menu prevents accidental clicks
- Danger variant (`dropdown__item--danger`) for destructive actions like logout

## Known limitations

- Only supports one dropdown per page (uses `querySelector` not `querySelectorAll`)
- No keyboard navigation (Escape to close, arrow keys to move)
- Menu always drops down-left — no auto-positioning
