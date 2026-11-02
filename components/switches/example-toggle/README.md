# Toggle Switch

An iOS-style toggle switch built with a hidden checkbox and pure CSS.

## How to use

Copy the `<label class="switch">` block and include `style.css`. The hidden `<input type="checkbox">` holds the on/off state — you can read it in JS with `checkbox.checked`.

## Design decisions

- Uses a real `<input>` for accessibility and form compatibility
- The checkbox is visually hidden but still focusable
- `:focus-visible` adds a keyboard focus ring without showing it on mouse click
- Smooth transition on the slider knob using `transform`

## Known limitations

- No "on"/"off" text labels inside the track
- Only one size — would need CSS custom properties for different sizes
