# Star Rating Component

## Goal

Create a standalone, interactive star rating component that allows users to select a rating from 1 to 5.

## Features

- Five selectable stars
- Hover preview before selection
- Persistent visual feedback for the selected rating
- Numeric rating displayed with one decimal place
- Keyboard navigation using native radio inputs
- Responsive layout for mobile and desktop

## Decisions

- **Radio inputs and labels:** Used native HTML radio inputs to support single selection and keyboard navigation.
- **Reusable highlighting function:** The `showStars(rating)` function handles both hover previews and selected ratings, avoiding duplicated logic.
- **CSS classes:** The `.filled` class controls star highlighting, keeping visual styling in CSS.
- **Responsive layout:** The rating display and stars stack vertically on smaller screens and sit side by side on larger screens.
- **Accessibility:** Used a `fieldset`, `legend`, labelled inputs and visible keyboard focus styling.

## Files

- `index.html` — Component structure
- `style.css` — Styling and responsive layout
- `script.js` — Rating selection and hover interactions

## Design

- Simple palette of blue and yellow. See tokens in style.css
