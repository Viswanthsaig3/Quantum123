# QuantumEdgeX - Digital Transformation Website

A modern, futuristic website built with Next.js 14, Tailwind CSS, and Framer Motion featuring a sleek red and black design theme.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** with custom red/black theme
- ✨ **Framer Motion** animations
- 📱 **Fully Responsive** design
- 🎯 **Modern UI Components** with shadcn/ui
- 🚀 **TypeScript** for type safety
- 🎪 **Interactive Elements** with hover effects and animations

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom configurations
- **Animations**: Framer Motion, React Simple Typewriter
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main homepage
├── components/
│   ├── ui/
│   │   └── button.tsx      # Reusable button component
│   ├── navbar.tsx          # Navigation bar
│   ├── hero.tsx           # Hero section with typewriter effect
│   ├── services.tsx       # Services cards section
│   ├── about.tsx          # About us and values section
│   ├── stats.tsx          # Animated statistics
│   ├── contact.tsx        # Contact form and info
│   └── footer.tsx         # Footer with links
├── lib/
│   └── utils.ts           # Utility functions
└── tailwind.config.js     # Tailwind configuration
```

## Key Components

### Hero Section
- Animated typewriter effect
- Floating background elements
- Call-to-action buttons with hover effects

### Services Section
- Interactive service cards
- Hover animations
- Icon integration with Lucide React

### Statistics Section
- Animated number counters
- Scroll-triggered animations
- Partner logos section

### Contact Form
- Functional contact form
- Form validation
- Responsive design

## Customization

### Colors
The project uses a custom red and black color palette defined in `tailwind.config.js`:
- Primary Red: `#ff3c38`
- Hover Red: `#ff1f1f`
- Background: Black/neutral variants

### Animations
All animations are built with Framer Motion and include:
- Scroll-triggered animations
- Hover effects
- Page transitions
- Number counters

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is created for demonstration purposes.