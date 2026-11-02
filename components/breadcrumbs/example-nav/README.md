# Breadcrumb Navigation

A trail showing the current page location in a hierarchy.

## How to use

Use an `<ol>` with `.breadcrumb__item` list items. The last item should have `aria-current="page"` to mark it as the current page.

## Design decisions

- Uses `<ol>` (ordered list) because breadcrumbs are a sequence
- Slashes generated with CSS `::after` pseudo-elements
- `aria-current="page"` for screen reader accessibility
- Current page is not clickable

## Known limitations

- No mobile collapse (long breadcrumbs might wrap awkwardly on small screens)
