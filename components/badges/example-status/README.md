# Status Badge

Coloured pill-shaped badges for displaying status labels.

## How to use

Use a `<span class="badge badge--{variant}">` element. Available variants: `success`, `warning`, `danger`, `info`, `neutral`.

## Design decisions

- BEM modifier pattern (`badge--success`) for easy variant switching
- Pill shape via large `border-radius`
- Soft background colours with dark text for readability
- `text-transform: uppercase` for a compact, label-like feel

## Known limitations

- No icon support — would need a small SVG or icon font
- Colours are hardcoded — no dark mode variant
