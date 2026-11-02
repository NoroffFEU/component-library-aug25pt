# Star Rating

An interactive 5-star rating input with hover preview and click confirmation.

## How to use

Include `style.css` and `script.js`. Each star needs a `data-value` attribute (1–5). One version is interactive; add `rating--readonly` class for a display-only variant.

## Design decisions

- Stars change colour on hover to preview the rating
- Clicking locks in the rating
- Yellow stars (`#ffc107`) signal a selected state
- Scale animation on hover for visual feedback

## Known limitations

- No form integration — rating is just displayed, not submitted
- No way to reset or clear the rating
