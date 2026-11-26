# Product Card

A responsive product card for a contemporary furniture store, displaying a product image, object number, category, title, price, description and call-to-action.

## How to use

Copy the `.card-container` HTML structure and include `style.css`. Replace the product image, alt text and product information with your own content.

Use `.card-grid` to display multiple cards in a responsive layout.

## Design decisions

- CSS custom properties keep colours, typography and spacing consistent.
- CSS Grid creates a responsive layout with one, two or three columns.
- Flexbox structures the card content and aligns the buttons within each row.
- `object-fit: cover` prevents image distortion.
- A background colour on the object label improves readability across different images.
- Rounded corners, a subtle border and a box-shadow define the card.
- Hover and keyboard focus states provide visual feedback.

## Known limitations

- Product information is static.
- The View Product buttons are placeholders without functionality.
- Product images may be cropped to fit the image container.
