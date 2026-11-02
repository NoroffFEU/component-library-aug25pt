# Pagination

Navigation for multi-page content with numbered page buttons.

## How to use

Copy the `.pagination` nav with `.pagination__number` links for each page. One number should have the `active` class. Update the page dynamically with JavaScript when a link is clicked.

## Design decisions

- Ellipsis (`...`) shows when pages are skipped
- Current page is highlighted in colour
- Previous/Next buttons for quick navigation
- Number buttons are square-ish for easy clicking

## Known limitations

- No automatic page skipping — all numbers are shown (no smart ellipsis logic)
- Prev/Next buttons don't disable on first/last page
