# Instagram Widget & Terracotta Theme

## What's New

### 🎨 Terracotta Earth Theme
Your app now features a beautiful terracotta and earth-toned color scheme:
- Warm terracotta primary colors (#d46f48)
- Earthy secondary tones
- Soft, natural backgrounds
- Enhanced gradients with earthy vibes

### 📱 Instagram Feed Widget
A stunning Instagram integration featuring:
- Live Instagram profile embed
- Profile card with follower stats
- Gallery preview grid
- Direct link to @skyav.in Instagram
- Responsive design with hover effects
- Smooth animations

## Features

### Instagram Section Includes:
1. **Profile Card** - Shows your Instagram handle with stats
2. **Live Embed** - Real Instagram profile widget
3. **Gallery Preview** - 4 placeholder tiles linking to your profile
4. **Follow Button** - Direct call-to-action

### Theme Colors:
- **Primary**: Terracotta (#d46f48)
- **Secondary**: Warm earth tones
- **Backgrounds**: Soft beige and cream
- **Accents**: Rich clay colors

## Customization

### Update Instagram Handle
In `src/components/InstagramFeed.tsx`, change:
```tsx
href="https://www.instagram.com/skyav.in/"
```

### Adjust Stats
Update the follower counts in the stats grid:
```tsx
<div className="text-2xl font-bold text-primary">10K+</div>
```

### Modify Colors
Edit `src/index.css` to adjust the terracotta theme variables.

## Usage

The Instagram feed is automatically included in your homepage between Testimonials and FAQ sections.

To move it, edit `src/pages/Index.tsx` and reposition the `<InstagramFeed />` component.
