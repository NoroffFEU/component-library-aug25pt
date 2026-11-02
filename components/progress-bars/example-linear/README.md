# Progress Bar

A horizontal bar showing task progress with a percentage.

## How to use

Set the `width` on `.progress__bar` to match the progress percentage. Update the `aria-valuenow` attribute on the `.progress` element for accessibility.

```html
<div class="progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
  <div class="progress__bar" style="width: 50%"></div>
</div>
```

## Design decisions

- Gradient fill for visual appeal
- `role="progressbar"` and `aria-valuenow` for screen readers
- Smooth width transition for animated updates
- Rounded corners on both the track and bar

## Known limitations

- No indeterminate state (spinner-style loading)
- Width must be set inline or via JS
