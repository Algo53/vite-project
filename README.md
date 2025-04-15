# Dashboard Analytics Platform

A responsive dashboard with dark mode support, and interactive metrics visualization.

## Features
- Dark/Light mode toggle
- Responsive sidebar with hover animations
- Metric cards with dynamic visual effects
- Mobile-first design
- Interactive UI components

## Setup Steps

1. **Clone Repository**
   ```bash
   git clone git repo link

2. **Install Dependencies**
   ```bash
   npm install

3. **Add Font Awesome CDN**
   * Add to public/index.html:
      ```html
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">


4. **Configure Tailwind**
   * Ensure tailwind.config.js contains:
      ```js
      module.exports = {
         darkMode: 'class',
         // ... rest of config
      }

5. **Run Application**
   ```bash
   npm run dev

## Project Structure
```
my-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Card.jsx
│   │   ├── ChatButton.jsx
│   │   ├── ChatModal.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── App.js
│   └── index.js
└── README.md
```

## Screenshots
1. **Light Mode**

   ![alt text](image-1.png)


2. **Dark Mode**

   ![alt text](image.png)

3. **Chat Modal**
   ![alt text](image-2.png)
   ![alt text](image-3.png)

4. **Mobile View**
   ![alt text](image-4.png)
   ![alt text](image-5.png)
   ![alt text](image-6.png)
   ![alt text](image-7.png)
   ![alt text](image-8.png)
   ![alt text](image-9.png)