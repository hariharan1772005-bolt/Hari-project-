# Getting Started with HH Connect

## Prerequisites

- Node.js 18.17+
- npm or yarn
- PostgreSQL or SQLite
- Git

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/hariharan1772005-bolt/Hari-project-.git
cd Hari-project-
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

### 4. Setup Database

```bash
# Generate Prisma Client
npm run prisma:generate

# Run migrations
npm run prisma:migrate
```

### 5. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Project Structure

```
Hari-project-/
├── src/
│   ├── app/           # Next.js pages
│   ├── components/    # React components
│   ├── hooks/         # Custom hooks
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   └── utils/         # Utilities
├── prisma/            # Database
├── public/            # Static files
└── docs/              # Documentation
```

## Available Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Database
npm run prisma:generate   # Generate Prisma client
npm run prisma:migrate    # Run migrations
npm run prisma:studio     # Open Prisma Studio

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript
```

## First Steps

1. Create a user account
2. Complete your profile
3. Browse job listings
4. Apply for jobs
5. Connect with professionals

## Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Database Connection Error

Ensure PostgreSQL is running and `DATABASE_URL` is correct in `.env.local`

### Dependencies Installation Issue

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

- Read the [API Guide](./api-guide.md)
- Check [Architecture](./architecture.md)
- Review [Database Schema](./database-schema.md)
