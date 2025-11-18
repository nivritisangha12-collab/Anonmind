# AnonMind - Share Freely, Feel Light

A calming, minimalist social platform for anonymous thought sharing.

## File Structure

```
pages/
├── home.html       - Landing page with hero section
├── feed.html       - Community feed with thought cards
├── share.html      - Form to share anonymous thoughts
├── profile.html    - User profile with personal posts
├── about.html      - About page with mission and values
├── styles.css      - Shared stylesheet for all pages
├── script.js       - Shared JavaScript utilities
└── README.md       - This file
```

## Pages

### 1. **home.html**
The landing page featuring:
- Hero section with inspiring quote
- Call-to-action button
- Feature pills highlighting key benefits
- Clean, centered layout

### 2. **feed.html**
Community thought feed with:
- Grid of anonymous thought cards
- Like/unlike functionality
- Responsive card layout
- Mock data for demonstration

### 3. **share.html**
Thought submission page with:
- Simple textarea form
- Character counter (500 max)
- Submit button with success animation
- Saves posts to localStorage

### 4. **profile.html**
Personal profile page showing:
- Anonymous user ID
- User statistics (posts, likes)
- Grid of user's own posts
- Privacy notice

### 5. **about.html**
Information page with:
- Mission statement
- Platform features
- Core values
- Closing message

## Features

### Design
- **Soft pastel color scheme**: Lavender (#B8A1D9), Baby Blue (#A8C9E8), Light Cream (#FBF8F3)
- **Rounded typography**: Nunito font family
- **Dark/Light mode toggle**: Persists across pages
- **Responsive design**: Works on mobile, tablet, and desktop
- **Calming aesthetic**: Lots of whitespace, soft shadows, rounded corners

### Functionality
- **Anonymous posting**: Randomly generated user IDs
- **Like system**: Toggle likes on thoughts
- **LocalStorage persistence**: Saves posts, likes, theme preference, and user ID
- **Character limit**: 500 characters per thought
- **Date formatting**: Shows when posts were created

## How to Use

1. **Open any HTML file** in your web browser
2. **Start with home.html** for the landing page
3. **Navigate** between pages using the top navigation bar
4. **Toggle dark mode** using the sun/moon icon
5. **Share thoughts** on the share.html page
6. **View your posts** on the profile.html page

## Technical Details

### Shared Resources
- **styles.css**: Contains all common styles and CSS variables
- **script.js**: Contains shared JavaScript functions for theme, storage, and utilities

### Page-Specific Code
Each HTML file contains:
- Its own unique styles in a `<style>` tag
- Page-specific JavaScript in a `<script>` tag
- Navigation with active state highlighting

### LocalStorage Keys
- `anonmind-theme`: Stores light/dark mode preference
- `anonmind-user-id`: Stores anonymous user identifier
- `anonmind-user-posts`: Stores user's posted thoughts
- `anonmind-liked-posts`: Stores IDs of liked posts

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #B8A1D9;      /* Lavender */
    --secondary: #A8C9E8;    /* Baby Blue */
    --background: #FBF8F3;   /* Light Cream */
    /* ... more colors ... */
}
```

### Mock Data
Edit the `mockThoughts` array in `feed.html` to change the example thoughts.

### Character Limit
Change `maxlength="500"` in the textarea on `share.html`.

## Browser Support

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## No Server Required

All pages run entirely in the browser with no backend needed. Data is stored locally using localStorage API.

---

**Created with care for mental wellness and authentic self-expression.**
