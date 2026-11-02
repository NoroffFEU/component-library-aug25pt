# Toast Notification

Temporary popup messages that appear in the corner and auto-dismiss.

## How to use

Call `showToast(message, type)` from JavaScript:

```js
showToast("Success!", "success");
showToast("Error occurred", "error");
```

## Design decisions

- Fixed position in top-right so it's always visible
- Auto-dismisses after 4 seconds
- Slide-in/slide-out animations
- User can click the close button to dismiss early
- Left border shows the message type

## Known limitations

- Only supports success and error types
- No queue management — multiple toasts stack vertically
