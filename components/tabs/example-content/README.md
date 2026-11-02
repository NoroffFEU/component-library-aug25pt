# Content Tabs

A tab navigation component that switches between content panels.

## How to use

Copy the `.tabs` HTML structure and include `style.css` and `script.js`. Each button needs a `data-tab` attribute that matches the panel's `id` (prefixed with `tab-`).

To add a new tab:
1. Add a `<button class="tabs__button" data-tab="your-id">` to `.tabs__nav`
2. Add a `<div class="tabs__panel" id="tab-your-id">` to `.tabs__panels`

## Design decisions

- `data-tab` attribute links buttons to panels — clean separation of content and behaviour
- Active state uses a bottom border highlight on the button
- Panels use `display: none/block` for instant switching (no animation)

## Known limitations

- No keyboard arrow-key navigation between tabs
- No URL hash support for deep-linking to a specific tab
- No transition animation between panels
