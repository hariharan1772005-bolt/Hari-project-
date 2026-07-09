// User Types
export type UserRole = 'STUDENT' | 'FREELANCER' | 'RECRUITER' | 'COMPANY' | 'ADMIN' | 'SUPER_ADMIN';

export interface User {
  id: string;
  fullName: string;
  username: string;
  email: string;
  emailVerified: Date | null;
  phone?: string;
  role: UserRole;
  avatar?: string;
  coverImage?: string;
  bio?: string;
  headline?: string;
  location?: string;
  country?: string;
  city?: string;
  website?: string;
  linkedIn?: string;
  github?: string;
  behance?: string;
  dribbble?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  isVerified: boolean;
  status: string;
  profileCompletion: number;
  createdAt: Date;
  updatedAt: Date;
}

// Job Types
export type EmploymentType = 'FULL_TIME' | 'PART_TIME' | 'INTERNSHIP' | 'CONTRACT' | 'FREELANCE' | 'REMOTE';
export type WorkMode = 'ONSITE' | 'REMOTE' | 'HYBRID';
export type ApplicationStatus = 'APPLIED' | 'UNDER_REVIEW' | 'SHORTLISTED' | 'INTERVIEW' | 'HIRED' | 'REJECTED';

export interface Job {
  id: string;
  companyId: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  salaryMin?: number;
  salaryMax?: number;
  salaryType?: string;
  location?: string;
  workMode: WorkMode;
  employmentType: EmploymentType;
  experience?: string;
  skills: string[];
  education?: string;
  languages: string[];
  responsibilities?: string;
  requirements?: string;
  benefits?: string;
  deadline?: Date;
  openPositions: number;
  status: string;
  featured: boolean;
  views: number;
  applicantCount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Application {
  id: string;
  userId: string;
  jobId: string;
  companyId: string;
  resumeId?: string;
  coverLetter?: string;
  portfolioLink?: string;
  linkedInUrl?: string;
  githubUrl?: string;
  expectedSalary?: number;
  availability?: string;
  status: ApplicationStatus;
  rating?: number;
  notes?: string;
  rejectionReason?: string;
  appliedAt: Date;
  updatedAt: Date;
}

// Company Types
export type VerificationStatus = 'UNVERIFIED' | 'PENDING' | 'VERIFIED' | 'REJECTED';

export interface Company {
  id: string;
  ownerId: string;
  name: string;
  slug: string;
  logo?: string;
  cover?: string;
  industry?: string;
  website?: string;
  email?: string;
  phone?: string;
  description?: string;
  companySize?: string;
  foundedYear?: number;
  address?: string;
  country?: string;
  city?: string;
  verified: VerificationStatus;
  followerCount: number;
  reviewCount: number;
  rating?: number;
  createdAt: Date;
  updatedAt: Date;
}

// Portfolio Types
export interface Portfolio {
  id: string;
  userId: string;
  about?: string;
  headline?: string;
  theme: string;
  primaryColor: string;
  accentColor: string;
  fontFamily?: string;
  backgroundStyle?: string;
  isPublished: boolean;
  viewCount: number;
  sectionOrder: string[];
  createdAt: Date;
  updatedAt: Date;
}

// Resume Types
export interface Resume {
  id: string;
  userId: string;
  fileName: string;
  fileUrl: string;
  atsScore?: number;
  isPrimary: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Skill Types
export interface Skill {
  id: string;
  name: string;
  category?: string;
  description?: string;
  endorsementCount: number;
}

export interface UserSkill {
  id: string;
  userId: string;
  skillId: string;
  proficiencyLevel: string;
  yearsOfExperience?: number;
  endorsements: number;
}

// Experience Types
export interface Experience {
  id: string;
  userId: string;
  companyName: string;
  position: string;
  employmentType: EmploymentType;
  startDate: Date;
  endDate?: Date;
  currentlyWorking: boolean;
  location?: string;
  description?: string;
  responsibilities?: string;
  achievements?: string;
  technologies: string[];
}

// Education Types
export interface Education {
  id: string;
  userId: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear?: number;
  currentlyStudying: boolean;
  cgpa?: number;
  description?: string;
}

// Project Types
export interface Project {
  id: string;
  userId?: string;
  companyId?: string;
  title: string;
  slug: string;
  description: string;
  shortDescription?: string;
  images: string[];
  budget?: number;
  timeline?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  role?: string;
  achievements?: string;
  status: string;
  featured: boolean;
  views: number;
  applicantCount: number;
  createdAt: Date;
  updatedAt: Date;
}

// Certificate Types
export interface Certificate {
  id: string;
  userId: string;
  title: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId?: string;
  credentialUrl?: string;
  certificateUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Message Types
export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  receiverId?: string;
  content: string;
  attachmentUrl?: string;
  attachmentType?: string;
  isRead: boolean;
  readAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Conversation {
  id: string;
  title?: string;
  lastMessage?: string;
  lastMessageAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Notification Types
export type NotificationType = 'MESSAGE' | 'JOB' | 'APPLICATION' | 'SYSTEM' | 'PAYMENT';

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedId?: string;
  relatedType?: string;
  isRead: boolean;
  readAt?: Date;
  actionUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Subscription Types
export type SubscriptionPlan = 'FREE' | 'PRO' | 'BUSINESS' | 'ENTERPRISE';
export type PaymentStatus = 'PENDING' | 'COMPLETED' | 'FAILED' | 'REFUNDED';

export interface Subscription {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  startDate: Date;
  endDate?: Date;
  autoRenew: boolean;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: string;
  userId?: string;
  companyId?: string;
  subscriptionId?: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  gateway: string;
  transactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    pages: number;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
}
