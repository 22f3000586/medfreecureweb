project:
  name: "MedFreeCure Web Application"
  description: >
    A modern, responsive web application built for MedFreeCure, a health-tech platform 
    dedicated to promoting natural, medicine-free healing and holistic wellness.
  developed_during: "Internship at ITTechWorks.com"
  client: "MedFreeCure"
  live_demo: "https://medfreecureweb.vercel.app"

overview:
  purpose: >
    MedFreeCure Web serves as a front-end portal that connects users with natural 
    healing programs, consultation services, and wellness resources. The application 
    ensures accessibility, performance, and a clean interface designed to educate 
    and engage users about medicine-free healing practices.
  objectives:
    - Develop a fast, SEO-optimized web interface using Next.js.
    - Ensure responsive design for mobile, tablet, and desktop.
    - Create a modular and scalable architecture for easy maintenance.
    - Integrate secure routing and authentication for role-based users.
    - Prepare a client-ready deployment via Vercel.

tech_stack:
  framework: "Next.js (React + SSR/SSG)"
  language: "TypeScript"
  styling: "Tailwind CSS"
  build_tool: "PostCSS, Next.js built-in bundler"
  version_control: "Git, GitHub"
  deployment: "Vercel"
  package_manager: "npm / yarn"

project_structure: |
  medfreecureweb/
  ├── app/ or pages/          # Main application routes
  │   ├── index.tsx           # Landing page
  │   ├── about/              # About MedFreeCure
  │   ├── contact/            # Contact & enquiry forms
  │   ├── services/           # Natural healing service pages
  │   └── auth/               # Authentication routes
  │
  ├── components/             # Reusable UI components
  │   ├── Header.tsx
  │   ├── Footer.tsx
  │   ├── WhatsAppButton.tsx
  │   └── Cards, Sections, etc.
  │
  ├── public/                 # Static assets (images, icons)
  ├── styles/                 # Global and Tailwind styles
  ├── tailwind.config.ts      # Tailwind configuration
  ├── next.config.mjs         # Next.js custom configuration
  ├── postcss.config.mjs      # PostCSS configuration
  ├── tsconfig.json           # TypeScript configuration
  └── package.json            # Dependencies and scripts

setup:
  prerequisites:
    - "Node.js (v16 or higher)"
    - "npm or yarn package manager"

  installation_steps:
    - step: "Clone the repository"
      command: |
        git clone https://github.com/22f3000586/medfreecureweb.git
        cd medfreecureweb
    - step: "Install dependencies"
      command: |
        npm install
        # or
        yarn install
    - step: "Set up environment variables"
      env_file: ".env.local"
      env_example:
        NEXT_PUBLIC_API_BASE_URL: "https://api.medfreecure.com"
        NEXTAUTH_SECRET: "your_secret_here"
    - step: "Run the development server"
      command: |
        npm run dev
        # or
        yarn dev
      url: "http://localhost:3000"
    - step: "Build for production"
      command: |
        npm run build
        npm run start

features:
  - "Fast and SEO-friendly pages using Next.js static generation"
  - "Responsive UI designed with Tailwind CSS"
  - "Authentication-ready structure for secure login/logout"
  - "Reusable components (Header, Footer, Cards, Buttons)"
  - "WhatsApp integration for direct communication"
  - "Focus on natural healing — content structured for awareness and engagement"
  - "Deployed on Vercel for optimal speed and scalability"

internship_contribution:
  organization: "ITTechWorks"
  role: "Frontend Developer Intern"
  responsibilities:
    - "Developed responsive web pages using Next.js and Tailwind CSS"
    - "Implemented reusable and modular UI components"
    - "Integrated SEO optimizations and routing"
    - "Configured deployment pipelines via Vercel"
    - "Collaborated with backend team for API integration"
    - "Ensured accessibility and responsive design compliance"
    - "Documented setup and deployment instructions"

future_enhancements:
  - "AI-based personalized health suggestions"
  - "Real-time chat between patient and practitioner"
  - "Mobile app integration (React Native / Flutter)"
  - "Multi-language support"
  - "Analytics dashboard for admin insights"
  - "Appointment reminders via email/SMS"

testing_and_quality:
  methods:
    - "Manual cross-browser testing (Chrome, Edge, Firefox, Safari)"
    - "Mobile responsiveness testing on multiple devices"
    - "Code linting and formatting with ESLint & Prettier"
    - "Optional: Unit and component testing setup"

contact:
  author: "Taniya Gupta"
  email: "s153.taniya@gmail.com"
  linkedin: "https://www.linkedin.com/in/taniyaaa/"
  github: "https://github.com/22f3000586"

meta:
  developed_with: "❤️ by Taniya Gupta during internship at ITTechWorks for MedFreeCure"
  license: "MIT License"
  last_updated: "November 2025"
