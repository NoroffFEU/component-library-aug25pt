# Confirm Dialog

A modal dialog with confirm and cancel actions, overlay backdrop, and keyboard support.

## How to use

Copy the `.modal-overlay` and trigger button HTML. Include `style.css` and `script.js`. The modal opens when the trigger button is clicked and closes on Cancel, Escape key, or clicking the overlay backdrop.

## Design decisions

- Uses `aria-modal="true"` and `role="dialog"` for screen reader support
- Overlay click closes the modal (but clicking inside the modal doesn't)
- Escape key closes the modal for keyboard users
- Scale + translate animation gives a smooth pop-in effect
- Destructive action (confirm) is styled in red to signal caution

## Known limitations

- Focus is not trapped inside the modal — Tab can reach elements behind it
- No stacking support for multiple modals
- The confirm action just shows an alert — replace with your own logic
