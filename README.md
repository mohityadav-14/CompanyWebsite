# Company Website

A modern, responsive company website built with React and Vite, showcasing a professional portfolio and service offerings with optimized performance and clean code architecture.

## 🎯 Live Demo & Project Overview

This project demonstrates a full-stack frontend development approach with modern web technologies. The website serves as a portfolio and service showcase with multiple pages, responsive design, and best practices in React development.

**Key Highlights:**
- ⚡ Ultra-fast development experience with Vite (near-instant HMR)
- 🎨 Responsive design using Tailwind CSS
- 🛣️ Multi-page routing with React Router v7
- 📱 Mobile-first approach
- 🔍 SEO-friendly structure
- ✅ ESLint configured for code quality
- 🚀 Optimized production builds

## 📋 Tech Stack

### Frontend Framework & Build Tools
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | Component-based UI library |
| Vite | ^8.0.0-beta.13 | Lightning-fast build tool & dev server |
| React Router | 7.13.0 | Client-side routing |
| JavaScript/ES6+ | - | Core language |

### Styling & UI
| Technology | Version | Purpose |
|-----------|---------|---------|
| Tailwind CSS | 4.1.18 | Utility-first CSS framework |
| PostCSS | 8.5.6 | CSS processing |
| Autoprefixer | 10.4.24 | Browser vendor prefixes |

### Developer Tools & Linting
| Tool | Version | Purpose |
|------|---------|---------|
| ESLint | 9.39.1 | Code quality & error detection |
| @vitejs/plugin-react | 5.1.1 | React + JSX support in Vite |

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd company-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app opens at `http://localhost:5173` with hot module reloading (HMR)

### Build for Production

```bash
npm run build
```
Generates optimized production build in `dist/` directory

### Preview Production Build

```bash
npm run preview
```
Test the production build locally

### Run Linter

```bash
npm run lint
```
Check code quality and identify potential issues

## 📁 Project Structure

```
company-website/
├── src/
│   ├── components/              # Reusable React components
│   │   ├── Button.jsx           # Customizable button component
│   │   ├── Card.jsx             # Reusable card layout
│   │   ├── Navbar.jsx           # Navigation header
│   │   └── Footer.jsx           # Site footer
│   ├── pages/                   # Page components for routing
│   │   ├── Home.jsx             # Landing page
│   │   ├── About.jsx            # Company information
│   │   ├── Services.jsx         # Services overview
│   │   ├── Portfolio.jsx        # Project showcase
│   │   └── Contact.jsx          # Contact form & info
│   ├── assets/                  # Static assets (images, icons, etc.)
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # React entry point
│   ├── App.css                  # Global component styles
│   ├── index.css                # Global styles
│   ├── tailwind.config.js       # Tailwind CSS configuration
│   └── postcss.config.js        # PostCSS configuration
├── public/                      # Static files (favicon, robots.txt, etc.)
├── vite.config.js               # Vite configuration
├── eslint.config.js             # ESLint rules configuration
├── package.json                 # Project dependencies & scripts
├── index.html                   # HTML entry point
└── README.md                    # Project documentation
```

## 🎨 Component Architecture

### Core Components

**Navbar.jsx**
- Responsive navigation header
- Mobile-friendly menu
- Links to all main pages

**Footer.jsx**
- Site footer information
- Quick links
- Contact information
- Copyright details

**Card.jsx**
- Reusable card component
- Flexible layout for content
- Used in Services & Portfolio sections

**Button.jsx**
- Consistent button component
- Multiple variants and sizes
- Accessibility-focused

### Page Components

- **Home.jsx** - Landing page with hero section and call-to-action
- **About.jsx** - Company profile and team information
- **Services.jsx** - Overview of offered services
- **Portfolio.jsx** - Showcase of completed projects
- **Contact.jsx** - Contact form and information

## 🔄 Routing Structure

The app uses React Router v7 for client-side navigation:
```
/ → Home
/about → About
/services → Services
/portfolio → Portfolio
/contact → Contact
```

## 💡 Key Features

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Fast Performance** - Vite's optimized build delivers instant page loads
✅ **Clean Code** - ESLint enforced code quality standards
✅ **Modern React** - Uses React 19.2.0 with latest patterns
✅ **Utility-First CSS** - Tailwind CSS for rapid UI development
✅ **Component Reusability** - Modular, maintainable component structure
✅ **Optimized Assets** - Compressed images and lazy loading support
✅ **SEO-Friendly** - Semantic HTML structure

## 🛠️ Development Workflow

### Code Quality
- ESLint automatically checks code style and potential errors
- Run `npm run lint` before committing

### Hot Module Replacement (HMR)
- Vite provides instant updates during development
- Changes reflect in browser without full refresh

### Build Optimization
- Tree shaking removes unused code
- Code splitting for optimal bundle sizes
- Minification and compression in production

## 📦 Dependencies Management

All dependencies are kept up-to-date with modern best practices:
- React: Latest stable version (19.2.0)
- React Router: Latest version (7.13.0)
- Vite: Latest beta with superior performance
- Tailwind CSS: Latest version with new features

## 🚀 Performance Optimization

- **Vite's Rapid Build Process** - Sub-500ms dev server startup
- **Code Splitting** - Automatic route-based code splitting with React Router
- **CSS Optimization** - Tailwind purges unused CSS in production
- **Lazy Loading** - Components can be lazy loaded for better performance
- **Minification** - Automatic JS/CSS minification in production builds

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔐 Code Quality Standards

This project follows industry best practices:
- ✅ ESLint configuration for consistent code style
- ✅ React hooks best practices
- ✅ Component composition patterns
- ✅ Responsive design principles
- ✅ Accessibility considerations

## 🎯 Skills Demonstrated

This project showcases proficiency in:

**Frontend Development**
- React component architecture and lifecycle
- React Router v7 implementation
- State management patterns
- Conditional rendering and props handling

**Styling & Design**
- Tailwind CSS utility-first approach
- Responsive design implementation
- CSS Grid and Flexbox
- Mobile-first development

**Modern Tooling**
- Vite build tool and configuration
- NPM package management
- ESLint code quality tools
- Development server with HMR

**Best Practices**
- Clean, readable code structure
- Component reusability
- Modular file organization
- Version control friendly commits

## 🔄 Future Enhancements

Potential improvements for portfolio expansion:
- [ ] Add tests (Jest/Vitest)
- [ ] Implement context API/Redux for state management
- [ ] Add TypeScript for type safety
- [ ] Implement form validation and submission
- [ ] Add animations with Framer Motion
- [ ] Performance monitoring and optimization
- [ ] Dark mode toggle
- [ ] Internationalization (i18n)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

---

**Built with ❤️ using modern web technologies**