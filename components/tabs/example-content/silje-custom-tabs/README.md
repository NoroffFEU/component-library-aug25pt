# The Stitch Club

A standalone tabs component for knitting, crochet and sewing. Each tab opens a panel with a small project idea and a matching illustration. Knitting is selected when the demo opens.

## How to use

1. Open `index.html` in a browser to try the demo.
2. To reuse the component, copy the `.tabs` markup and include `style.css`, `script.js` and the `images/` folder. Load the script with `defer` if it goes in the document head.
3. Give each button and panel a unique ID. The button's `aria-controls` points to the panel's ID, and the panel's `aria-labelledby` points back to the button's ID.
4. Use the same `data-theme` on a tab and its panel to give them matching colors.

## Keyboard

| Key                | Action                                                                               |
| ------------------ | ------------------------------------------------------------------------------------ |
| Tab                | Focus the selected tab. Press again to focus its panel.                              |
| Left / Right Arrow | Select the previous or next tab and shows its panel. Navigation wraps at either end. |
| Home / End         | Select the first or last tab.                                                        |
| Enter / Space      | Activate the focused tab.                                                            |

## Design decisions

- **Color nad shape.** The three themes use strawberry pink, lemon yellow and blueberry purple. A stronger background color, dark border and shadow mark the selected tab. Dashed lines around the panels give them a stitched look.
- **Tab roles and selection.** The component uses native buttons with `role="tab"` inside a `tablist`. JavaScript keeps `aria-selected`, `tabindex` and `hidden` in sync so only the selected panel is visible.
- **Visible keyboard focus.** A separate `:focus-visible` outline makes it clear which element has keyboard focus.
- **Standalone demo.** The icons are local PNGs and the component runs without external dependencies.

## Known limitations

- The script supports one tab group per page.
- The selected tab resets to Knitting on reload. Tabs do not have their own URLs.

## References

- [MDN - ARIA tab role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role)
- [MDN - KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent)
- [MDN - hidden property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden)
