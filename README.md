# HH Connect

A premium SaaS platform for professional networking, job posting, portfolio building, and project collaboration.

## Overview

HH Connect is a comprehensive ecosystem that connects students, freelancers, professionals, companies, and recruiters. It enables:

- **Job Posting & Hiring**: Companies post jobs and manage applications
- **Portfolio Building**: Users showcase their work and skills
- **Project Collaboration**: Freelancers and clients connect for projects
- **Real-time Messaging**: Direct communication between users
- **AI-Powered Features**: Resume analysis, job recommendations, and more
- **Admin Dashboard**: Platform management and analytics

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Premium UI components
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Beautiful iconography

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Prisma ORM** - Database management
- **PostgreSQL** - Relational database
- **Next-Auth** - Authentication

## Project Structure

```
hh-connect/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── (auth)/             # Authentication pages
│   │   ├── (dashboard)/        # Dashboard routes
│   │   ├── api/                # API routes
│   │   └── layout.tsx          # Root layout
│   ├── components/             # Reusable React components
│   ├── lib/                    # Utility functions
│   ├── types/                  # TypeScript types
│   ├── hooks/                  # Custom React hooks
│   ├── services/               # API services
│   ├── utils/                  # Helper functions
│   └── constants/              # App constants
├── prisma/                     # Database schema
├── public/                     # Static assets
└── tests/                      # Test files
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 12+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/hariharan1772005-bolt/Hari-project-.git
cd Hari-project-

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Setup database
npm run db:push
npm run db:seed

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

### For Students & Professionals
- Create and manage portfolios
- Apply for jobs
- Upload and manage resumes
- Receive job recommendations
- Build professional networks

### For Freelancers
- Showcase work on portfolios
- Bid for projects
- Manage client communications
- Track earnings

### For Companies & Recruiters
- Post job openings
- Manage applications
- Schedule interviews
- View candidate profiles
- Post projects for freelancers

### Platform Features
- Advanced search and filtering
- Real-time messaging system
- Notifications
- Subscription plans
- Payment processing
- Admin dashboard
- Analytics and reports

## Development

### Running Tests
```bash
npm test
```

### Building for Production
```bash
npm run build
npm start
```

### Code Quality
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Formatting
npm run format
```

## Database

### Migrations
```bash
# Create a new migration
npm run db:migrate

# Push schema changes
npm run db:push

# Seed database
npm run db:seed

# Open Prisma Studio
npm run db:studio
```

## Security

- Secure password hashing with bcryptjs
- JWT-based authentication
- HTTPS and secure headers
- Input validation and sanitization
- Role-based access control
- Audit logging

## Performance

- Optimized images and lazy loading
- Code splitting
- Server-side rendering where appropriate
- Database query optimization
- Caching strategies

## Accessibility

- WCAG 2.2 AA compliant
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

BSL 1.0 - See LICENSE file

## Support

For support, email support@hhconnect.com or open an issue on GitHub.
