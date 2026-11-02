# Image Carousel

A slide-through carousel with prev/next buttons, dot indicators, and auto-play.

## How to use

Copy the `.carousel` HTML structure and include `style.css` and `script.js`. Replace the gradient slides with your own content (images, text, etc.). Add or remove `.carousel__slide` elements — the dots are generated automatically by JavaScript.

## Design decisions

- Fade transition (opacity) instead of sliding — simpler CSS, fewer edge cases
- Dots are generated from the number of slides in JS — no manual HTML needed
- Auto-advances every 4 seconds, pauses on hover so users can interact
- Wraps around at both ends (last slide goes to first, and vice versa)
- Uses `aria-label` on buttons and dots for screen reader support

## Known limitations

- Uses gradient backgrounds as placeholder — swap for `<img>` tags in production
- No swipe/touch support for mobile
- No keyboard arrow-key navigation
- Auto-play timer restarts from scratch on mouse leave
