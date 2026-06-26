# Divy.dev — Developer Portfolio

![Divy.dev Portfolio Banner](https://img.shields.io/badge/Status-Live-success?style=for-the-badge&color=10b981) ![Stack](https://img.shields.io/badge/Stack-TanStack_Start-blue?style=for-the-badge&color=3b82f6)

A high-performance, retro-futuristic developer portfolio built to showcase projects, skills, and professional experience. Designed with a clean, pixel-perfect aesthetic inspired by retro gaming consoles and modern brutalism.

**Live Site:** [https://portfolio.divysuper678.workers.dev](https://portfolio.divysuper678.workers.dev)

---

## ✨ Features

- **Retro-Modern Aesthetic:** A unique blend of modern UI/UX with nostalgic 8-bit accents and a custom boot screen.
- **Blazing Fast:** Built on top of TanStack Start and React, delivering incredible performance and instant page loads.
- **Responsive Layout:** Carefully crafted to look perfect on desktop, tablet, and mobile devices.
- **Edge Deployed:** Hosted directly on Cloudflare Workers for global low-latency access.
- **Dynamic Content:** Easily manageable projects, skills, and timeline data powered by centralized configuration.

---

## 🛠️ Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) / React
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

---

## 🚀 Running Locally

If you'd like to run this project on your local machine:

### 1. Clone the repository
```bash
git clone https://github.com/1divy2/portfolio-2026.git
cd portfolio-2026
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

The app will instantly boot up at `http://localhost:3000`.

---

## 🌐 Deployment

This project is configured to deploy automatically to Cloudflare Workers via Wrangler.

To deploy manually from your terminal:
```bash
# Build the production bundle
npm run build

# Deploy to Cloudflare edge network
npx wrangler deploy
```

---

## 📁 Content Management

All dynamic content is stored cleanly in a central configuration file. To update the portfolio's text, projects, or social links, simply edit:
`src/constants/portfolio.ts`

---

*Designed and engineered by Divy Dadheech.*
