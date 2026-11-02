# Hover Tooltip

A pure CSS tooltip that appears above an element on hover.

## How to use

Add `class="tooltip-trigger"` and a `data-tooltip="Your message"` attribute to any element. Include `style.css`. The tooltip text comes from the `data-tooltip` attribute, so no extra HTML is needed.

## Design decisions

- Pure CSS using `::after` pseudo-element — no JavaScript required
- `attr(data-tooltip)` reads the tooltip text from the HTML attribute
- Arrow created with CSS borders on `::before`
- Scale + opacity transition for a smooth pop-in effect

## Known limitations

- Tooltip always appears above — no auto-positioning for edge of viewport
- Long text will overflow on narrow screens (uses `white-space: nowrap`)
- Not accessible via keyboard alone — would need JS for focus support
