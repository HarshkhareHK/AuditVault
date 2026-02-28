<<<<<<< HEAD
# 🏢 Jhansi Associates Website
=======
#  AuditVault

Database Schema: The "Smart-Firm" Core
The backend is designed using a relational structure (PostgreSQL) to ensure data integrity between clients, their filings, and the actual files stored in the cloud.
>>>>>>> 99bbacf100c543b4d6c5786a9618c0f0825f9795

![Jhansi Associates Hero Preview](https://via.placeholder.com/1200x600.png?text=Jhansi+Associates+Hero+Preview)

A modern, responsive, and highly-polished landing page built for **Jhansi Associates**—Chartered Accountants offering full-stack GST, Audit, and Virtual CFO services. This project is designed with a premium aesthetic featuring glassmorphism, dynamic scrolling marquees, and rich animations to highlight the firm's AI-driven tax strategies.

---

## ✨ Features

- **Modern Hero Section**: High-conversion landing view with animated statistics cards demonstrating audit accuracy and compliance scores.
- **Glassmorphism Design**: Elegant overlays and translucent components that provide a modern "premium" feel.
- **Dynamic Marquee Ticker**: Continuous scrolling banner highlighting recent compliance changes, filing deadlines, and portal updates.
- **Interactive Services Grid**: Service cards with aesthetic hover micro-animations mapped to core business offerings.
- **Scroll-Aware Navigation**: A highly responsive header that transitions from transparent to solid upon scrolling.
- **Vanilla CSS Animations**: All styling and animations utilize pure, optimized CSS without relying on heavy frameworks like Tailwind.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Vanilla CSS (Global Design System with CSS Variables)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Keyframes + [Framer Motion](https://www.framer.com/motion/) *(installed for future integrations)*

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/HarshkhareHK/AuditVault.git
   cd AuditVault
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production-optimized build:

```bash
npm run build
```

This command generates a `dist` folder containing the compiled static files ready for deployment.

---

## 📂 Project Structure

```text
AuditVault/
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Scroll-aware navigation bar
│   │   ├── Header.css
│   │   ├── Hero.tsx        # Main landing section with stats
│   │   ├── Hero.css
│   │   ├── Marquee.tsx     # Scrolling ticker for live updates
│   │   ├── Marquee.css
│   │   ├── Services.tsx    # Interactive service highlights grid
│   │   ├── Services.css
│   │   ├── Footer.tsx      # Global footer with contact links
│   │   └── Footer.css
│   ├── App.tsx             # Main application layout assembly
│   ├── index.css           # Global styles and CSS design tokens
│   ├── main.tsx            # React application entry point
│   └── vite-env.d.ts
├── public/                 # Static assets
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
└── vite.config.ts          # Vite configuration
```

---

## 🎨 Design Philosophy

The aesthetic approach for this application strictly avoids purely utility-driven styling (like Tailwind) in favor of semantic HTML and beautifully structured Vanilla CSS. This enables deep customization of micro-interactions and robust maintainability across the component ecosystem. Core brand colors utilized:
- **Navy Blue**: `var(--dark-bg)` -> `#1c2333`
- **Vibrant Orange**: `var(--primary)` -> `#f36428`
- **Trust Green**: `var(--green)` -> `#2ecc71`

---

## 📄 License

© 2024 Jhansi Associates. Licensed Chartered Accountants. All Rights Reserved.
