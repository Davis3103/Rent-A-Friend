# Rent a Friend India

Rent a Friend India is a web application that connects users with verified local friends for activities, events, and meaningful experiences. The platform emphasizes safety, diversity, and flexibility, allowing users to find companions or become friends for hire across India.

## Features
- **Verified & Safe:** All friends are background checked and verified for user safety.
- **Diverse Community:** Connect with people sharing your interests and hobbies.
- **Flexible Booking:** Book friends for any duration, from a few hours to full-day adventures.
- **Modern UI:** Built with React, Next.js, Tailwind CSS, and a comprehensive set of reusable UI components.
- **Responsive Design:** Optimized for all devices.

## Tech Stack
- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/), Radix UI, Lucide Icons
- **Form Handling:** React Hook Form, Zod
- **Data Visualization:** Recharts

## Project Structure
```
├── app/                # Main application pages and routes
│   ├── about/          # About page
│   ├── admin-dashboard/# Admin dashboard
│   ├── auth/           # Authentication (login/signup)
│   ├── booking/        # Booking logic
│   ├── chat/           # Chat functionality
│   ├── contact/        # Contact/help center
│   ├── friend-dashboard/# Friend dashboard
│   ├── friend-profile/ # Friend profiles
│   ├── help/           # Help pages
│   ├── id-verification/# ID verification
│   ├── privacy/        # Privacy policy
│   ├── search/         # Search functionality
│   ├── terms/          # Terms of service
│   ├── user-dashboard/ # User dashboard
│   ├── layout.tsx      # App layout
│   └── page.tsx        # Landing page
├── components/         # React components
│   ├── theme-provider.tsx
│   └── ui/             # Reusable UI components (buttons, cards, forms, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, logos)
├── styles/             # Global and custom styles
├── package.json        # Project metadata and dependencies
├── tailwind.config.ts  # Tailwind CSS configuration
├── next.config.mjs     # Next.js configuration
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- pnpm (or npm/yarn)

### Installation
```bash
pnpm install
# or
npm install
```

### Development
```bash
pnpm dev
# or
npm run dev
```

### Build
```bash
pnpm build
# or
npm run build
```

### Lint
```bash
pnpm lint
# or
npm run lint
```

## Customization
- **UI Components:** Located in `components/ui/`, easily reusable and customizable.
- **Theme:** Tailwind CSS with custom color variables and dark mode support.
- **Configuration:** See `tailwind.config.ts` and `next.config.mjs` for advanced settings.

## License
This project is for demonstration purposes. All rights reserved © 2024 Rent a Friend India. 