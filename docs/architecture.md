# Architecture Overview

## Project Structure

### Frontend Architecture

- **Next.js App Router**: File-based routing system
- **React Components**: Reusable UI components
- **Zustand**: Global state management
- **SWR**: Data fetching and caching
- **Tailwind CSS**: Styling

### Backend Architecture

- **Next.js API Routes**: Serverless backend functions
- **Prisma ORM**: Database access and management
- **NextAuth.js**: Authentication and sessions
- **Middleware**: Authentication and validation

### Database Layer

- **PostgreSQL**: Primary database
- **Prisma Migrations**: Version control for schema
- **Data Models**: User, Job, Application, etc.

## Data Flow

1. **User Input** → React Component
2. **Component State** → Zustand Store
3. **API Call** → Service Layer (Axios)
4. **API Route** → Business Logic
5. **Database** → Prisma ORM
6. **Response** → Client State → UI Update

## File Organization

```
src/
├── app/
│   ├── (auth)/        # Auth pages
│   ├── (dashboard)/   # Protected pages
│   ├── api/           # API routes
│   └── page.tsx       # Homepage
├── components/
│   ├── ui/            # Reusable UI components
│   ├── Navigation.tsx
│   └── Footer.tsx
├── hooks/
│   └── useAuth.ts     # Custom hooks
├── services/
│   ├── authService.ts
│   └── jobsService.ts
├── types/
│   └── index.ts       # TypeScript types
├── constants/
│   └── index.ts       # App constants
└── utils/
    └── helpers.ts     # Utility functions
```

## Key Design Patterns

### Service Layer Pattern
API calls are abstracted in service files for reusability and testing.

### Component Composition
Large components are broken into smaller, reusable pieces.

### Type Safety
Full TypeScript implementation for type safety.

### Environment Configuration
Sensitive data stored in environment variables.

## Security Considerations

- Authentication via NextAuth.js
- CSRF protection
- SQL injection prevention via Prisma
- XSS protection via React
- Password hashing with bcryptjs
- Environment variables for secrets

## Performance Optimization

- Image optimization via Next.js
- Code splitting and lazy loading
- Caching with SWR
- Database query optimization
- Static generation where possible
