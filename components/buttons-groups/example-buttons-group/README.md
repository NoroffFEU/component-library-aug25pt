# Button Group

A row of connected buttons where only one is active at a time.

## How to use

Copy the `.button-group` and add as many `.button-group__btn` buttons as needed. Include `style.css` and `script.js`. One button should have the `active` class initially.

## Design decisions

- Buttons are closely spaced with rounded corners
- Only one can be active at a time — clicking a new one deactivates the previous
- Dark background container distinguishes the group
- Two colour schemes available (primary/secondary)

## Known limitations

- No radio button or hidden input — state is only visual
- Multiple groups can't be controlled together
