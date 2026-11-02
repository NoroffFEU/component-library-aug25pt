# Profile Card

A user profile card with a gradient banner, avatar initials, bio, and stats row.

## How to use

Copy the `.profile-card` HTML structure and include `style.css`. Replace the placeholder text with real content. To show a real image instead of initials, swap the avatar `<div>` for an `<img>` tag.

## Design decisions

- BEM naming (`profile-card__name`) keeps styles scoped and readable
- Initials avatar avoids needing an image file
- Gradient banner adds colour without any external assets
- Stats row uses flexbox for even spacing

## Known limitations

- Avatar is text-only — no image upload support
- Not fully responsive below 280px
- No hover or interactive states
