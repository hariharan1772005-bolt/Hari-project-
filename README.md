# HH Connect - Professional Networking & Job Platform

A comprehensive full-stack web application built with Next.js that connects professionals, job seekers, and companies in one unified platform.

## 🚀 Features

- **Job Listings**: Browse and search thousands of job opportunities
- **User Profiles**: Create and customize your professional profile
- **Portfolio Builder**: Showcase your projects and work samples
- **Networking**: Connect with professionals and recruiters
- **Job Applications**: Apply for jobs with one click
- **Freelance Projects**: Find and bid on freelance opportunities
- **Analytics**: Track profile views and application status
- **Messaging**: Communicate with employers and connections
- **Dark Mode**: Full dark/light theme support
- **Responsive Design**: Works seamlessly on all devices

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Efficient form handling
- **Zustand**: State management
- **SWR**: Data fetching library

### Backend
- **Next.js API Routes**: Serverless backend functions
- **Prisma**: Modern ORM for database access
- **NextAuth.js**: Authentication and authorization
- **PostgreSQL**: Relational database

### Tools & Libraries
- **Zod**: Schema validation
- **Axios**: HTTP client
- **Date-fns**: Date utilities
- **Slugify**: URL-friendly slugs
- **React Toastify**: Toast notifications

## 📋 Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager
- PostgreSQL database (or use Docker)
- Git

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hariharan1772005-bolt/Hari-project-.git
cd Hari-project-
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Update the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/hh_connect"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# API
NEXT_PUBLIC_API_URL="http://localhost:3000/api"

# Optional: Third-party services
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASSWORD=""
```

### 4. Set up the database

```bash
# Generate Prisma client
npm run prisma:generate

# Run migrations
npm run prisma:migrate

# Optional: Open Prisma Studio
npm run prisma:studio
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (auth)/         # Authentication pages
│   │   ├── (dashboard)/    # Protected dashboard routes
│   │   ├── api/            # API routes
│   │   └── page.tsx        # Homepage
│   ├── components/          # Reusable React components
│   │   ├── ui/             # UI component library
│   │   ├── Navigation.tsx   # Header navigation
│   │   └── Footer.tsx       # Footer component
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API service functions
│   ├── types/              # TypeScript type definitions
│   ├── constants/          # Application constants
│   ├── utils/              # Utility functions
│   └── styles/             # Global styles
├── prisma/                 # Database schema and migrations
├── public/                 # Static assets
├── tests/                  # Test files
├── .env.example           # Environment variables template
├── .prettierrc.js         # Prettier configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── jest.config.ts         # Jest testing configuration
└── package.json           # Project dependencies
```

## 🔐 Authentication

The platform uses **NextAuth.js** with the following providers:

- Email/Password (username & password)
- Google OAuth (optional)
- GitHub OAuth (optional)

Session management is handled securely with JWT tokens.

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Jobs Endpoints

- `GET /api/jobs` - List all jobs with pagination
- `GET /api/jobs/:id` - Get job details
- `POST /api/jobs/:id/apply` - Apply for a job
- `POST /api/jobs/create` - Create new job (admin)
- `PUT /api/jobs/:id/update` - Update job (admin)
- `DELETE /api/jobs/:id/delete` - Delete job (admin)

## 🧪 Testing

Run tests with:

```bash
npm test
```

## 📦 Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🚀 Deployment

The project is ready to deploy on:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS**
- **Azure**
- **DigitalOcean**

### Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@hhconnect.com or open an issue in the repository.

## 🎯 Roadmap

- [ ] Video interview capabilities
- [ ] AI-powered job recommendations
- [ ] Skills assessment tests
- [ ] Mobile app (React Native)
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Integration with LinkedIn
- [ ] Payment gateway for premium features

## 👨‍💻 Author

**Hariharan** - [GitHub](https://github.com/hariharan1772005-bolt)

---

**Made with ❤️ by the HH Connect Team**
