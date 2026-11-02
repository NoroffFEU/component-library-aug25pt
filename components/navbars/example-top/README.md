# Top Navigation

A sticky navbar with mobile hamburger menu toggle.

## How to use

Copy the `.navbar` HTML structure and include both `style.css` and `script.js`. The menu toggles on mobile and collapses on larger screens.

## Design decisions

- Sticky positioning keeps it visible as user scrolls
- Hamburger icon animates to an X when open
- Menu slides down on mobile with max-height transition
- Logo is always visible

## Known limitations

- Menu width isn't constrained on mobile — takes full width
- No active/current page indicator
