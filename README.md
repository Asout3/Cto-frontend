# CTO Frontend

A modern Next.js 15 application built with TypeScript, Tailwind CSS, and cutting-edge web technologies.

## Features

- ✨ **Next.js 15** - Latest React framework with App Router
- 🎨 **Tailwind CSS v4** - Utility-first CSS framework
- 📱 **Fully Responsive** - Mobile-first design
- 🎭 **Glassmorphism** - Modern UI effects
- ✨ **Framer Motion** - Smooth animations
- 🌓 **Dark Mode** - Built-in theme switching with `next-themes`
- 📦 **Radix UI** - Accessible component primitives
- 🛡️ **TypeScript** - Full type safety
- 🔐 **Better Auth** - Enterprise authentication
- 📡 **Axios** - HTTP client
- 🚀 **Supabase** - Backend as a service

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI, shadcn/ui
- **Animations**: Framer Motion
- **State Management**: Next.js built-in
- **Authentication**: Better Auth
- **Database**: Supabase
- **HTTP Client**: Axios
- **Theme**: next-themes

## Project Structure

```
.
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with theme provider
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable React components
│   ├── navbar.tsx      # Navigation bar
│   └── footer.tsx      # Footer component
├── lib/               # Utility functions and helpers
├── utils/             # Utility functions
├── styles/            # Additional stylesheets
├── public/            # Static assets
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
├── next.config.ts     # Next.js config
├── tailwind.config.ts # Tailwind config
├── postcss.config.js  # PostCSS config
└── .eslintrc.json     # ESLint config
```

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cto-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Type check with TypeScript

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

## Contributing

Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@cto.new or open an issue on GitHub.
