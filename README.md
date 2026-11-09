# Bhajarang — Personal Portfolio

A multi-page personal developer portfolio built with React, Vite, and React Router, designed to showcase my background, technical skills, projects, and contact information.

🔗 Live Demo:

 Features
- Client-Side Routing: Seamless multi-page navigation powered by `react-router-dom` with dedicated routes for Home, About, Skills, Projects, and Contacts.
- Persistent Navigation Bar: Clean, styled navigation bar (`Navbar`) providing quick access across all portfolio sections.
- Modular Project Structure: Organized into reusable components (`src/components`) and dedicated page sections (`src/sections`) with component-specific stylesheets.
- Fast Development & Build: Powered by Vite for instant hot module replacement (HMR) and optimized production builds.

Tech Stack
- Frontend: React.js, Vite
- Routing: React Router DOM (`react-router-dom`)
- Styling: Custom CSS (`App.css`, `navbar.css`)

Project Structure

my_portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   └── navbar.css
│   ├── sections/
│   │   ├── home.jsx
│   │   ├── about.jsx
│   │   ├── skills.jsx
│   │   ├── projects.jsx
│   │   └── contacts.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js


 Run Locally

1. Clone the repository:
   "bash
   git clone https://github.com
   "
2. Navigate to the project directory:
   "bash
   cd my_portfolio
   "
3. Install dependencies:
   "bash
   npm install
   "
4. Start the development server:
   "bash
   npm run dev
   "

📬 Contact
- Name: Erra Bhajarang
- Email: [bhajarang26@gmail.com]
- GitHub: [https://github.com/Errabhajarang]
- LinkedIn:[linkedin.com/in/erra-bhajarang/]




















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
