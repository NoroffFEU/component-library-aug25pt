# Alert Banner

Dismissible alert messages with multiple severity variants (info, success, warning, error).

## How to use

Copy a `.alert` block and add the appropriate variant class: `alert--info`, `alert--success`, `alert--warning`, or `alert--error`.

## Design decisions

- Coloured left border matches the alert type for quick visual scanning
- Icons provide instant visual feedback
- Close button hides the alert with JS, no page reload
- Variants use colour to communicate severity

## Known limitations

- No animation on dismiss — just instant hide
- Focus management not implemented
