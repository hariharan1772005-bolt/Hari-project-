// User Roles
export const USER_ROLES = {
  STUDENT: 'STUDENT',
  FREELANCER: 'FREELANCER',
  RECRUITER: 'RECRUITER',
  COMPANY: 'COMPANY',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN',
} as const;

// Employment Types
export const EMPLOYMENT_TYPES = {
  FULL_TIME: 'Full Time',
  PART_TIME: 'Part Time',
  INTERNSHIP: 'Internship',
  CONTRACT: 'Contract',
  FREELANCE: 'Freelance',
  REMOTE: 'Remote',
} as const;

// Work Modes
export const WORK_MODES = {
  ONSITE: 'On-site',
  REMOTE: 'Remote',
  HYBRID: 'Hybrid',
} as const;

// Application Status
export const APPLICATION_STATUS = {
  APPLIED: 'Applied',
  UNDER_REVIEW: 'Under Review',
  SHORTLISTED: 'Shortlisted',
  INTERVIEW: 'Interview',
  HIRED: 'Hired',
  REJECTED: 'Rejected',
} as const;

// Subscription Plans
export const SUBSCRIPTION_PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    features: [
      'Create profile',
      'Apply to jobs',
      'Limited portfolio',
      'View basic profiles',
    ],
  },
  PRO: {
    name: 'Pro',
    price: 999, // $9.99/month in cents
    features: [
      'Everything in Free',
      'Unlimited applications',
      'Premium portfolio',
      'Featured profile',
      'Message unlimited',
      'AI resume analysis',
    ],
  },
  BUSINESS: {
    name: 'Business',
    price: 2999, // $29.99/month in cents
    features: [
      'Everything in Pro',
      'Priority hiring',
      'Team management',
      'Advanced analytics',
      'Custom branding',
      'API access',
    ],
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: null, // Custom pricing
    features: [
      'Everything in Business',
      'Dedicated support',
      'Custom features',
      'White-label option',
      'Priority support',
    ],
  },
} as const;

// Notification Types
export const NOTIFICATION_TYPES = {
  MESSAGE: 'Message',
  JOB: 'Job',
  APPLICATION: 'Application',
  SYSTEM: 'System',
  PAYMENT: 'Payment',
} as const;

// Proficiency Levels
export const PROFICIENCY_LEVELS = {
  BEGINNER: 'Beginner',
  INTERMEDIATE: 'Intermediate',
  ADVANCED: 'Advanced',
  EXPERT: 'Expert',
} as const;

// Portfolio Themes
export const PORTFOLIO_THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  MINIMAL: 'minimal',
  CORPORATE: 'corporate',
  CREATIVE: 'creative',
  DEVELOPER: 'developer',
  DESIGNER: 'designer',
} as const;

// Color Palette
export const COLORS = {
  PRIMARY: '#2563EB',
  SECONDARY: '#0F172A',
  ACCENT: '#06B6D4',
  BACKGROUND: '#F8FAFC',
  BORDER: '#E2E8F0',
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  ERROR: '#EF4444',
  INFO: '#3B82F6',
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ALLOWED_FORMATS: {
    IMAGES: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'],
    DOCUMENTS: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    VIDEOS: ['video/mp4', 'video/webm', 'video/ogg'],
  },
} as const;

// Links
export const LINKS = {
  HOME: '/',
  ABOUT: '/about',
  FEATURES: '/features',
  PRICING: '/pricing',
  CONTACT: '/contact',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  DASHBOARD: '/dashboard',
  JOBS: '/jobs',
  COMPANIES: '/companies',
  FREELANCERS: '/freelancers',
  STUDENTS: '/students',
  PROJECTS: '/projects',
  PORTFOLIO: '/portfolio',
  MESSAGES: '/messages',
  NOTIFICATIONS: '/notifications',
  SETTINGS: '/settings',
  ADMIN: '/admin',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    REGISTER: '/api/auth/register',
    LOGOUT: '/api/auth/logout',
    REFRESH: '/api/auth/refresh',
    ME: '/api/auth/me',
  },
  USERS: {
    PROFILE: '/api/users/profile',
    UPDATE: '/api/users/update',
    SEARCH: '/api/users/search',
  },
  JOBS: {
    LIST: '/api/jobs',
    CREATE: '/api/jobs/create',
    DETAIL: (id: string) => `/api/jobs/${id}`,
    UPDATE: (id: string) => `/api/jobs/${id}/update`,
    DELETE: (id: string) => `/api/jobs/${id}/delete`,
    SEARCH: '/api/jobs/search',
    APPLY: (id: string) => `/api/jobs/${id}/apply`,
  },
  APPLICATIONS: {
    LIST: '/api/applications',
    DETAIL: (id: string) => `/api/applications/${id}`,
    WITHDRAW: (id: string) => `/api/applications/${id}/withdraw`,
  },
  COMPANIES: {
    LIST: '/api/companies',
    DETAIL: (id: string) => `/api/companies/${id}`,
    JOBS: (id: string) => `/api/companies/${id}/jobs`,
  },
} as const;
