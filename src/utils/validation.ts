import { z } from 'zod';

// Common validation schemas
export const emailSchema = z.string().email('Please enter a valid email address');

export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

export const nameSchema = z
  .string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name must be less than 50 characters')
  .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces');

export const phoneSchema = z
  .string()
  .regex(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number');

export const urlSchema = z.string().url('Please enter a valid URL');

// Form validation schemas
export const contactFormSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
  type: z.enum(['general', 'join', 'event', 'sponsor', 'other']),
});

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, 'Password is required'),
});

export const registerSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const profileUpdateSchema = z.object({
  name: nameSchema.optional(),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  socialLinks: z.object({
    github: urlSchema.optional(),
    linkedin: urlSchema.optional(),
    twitter: urlSchema.optional(),
    portfolio: urlSchema.optional(),
  }).optional(),
});

export const eventSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  date: z.string().min(1, 'Date is required'),
  location: z.string().min(1, 'Location is required'),
  type: z.enum(['workshop', 'competition', 'meetup', 'hackathon']),
  maxParticipants: z.number().min(1).optional(),
  image: z.string().url('Please enter a valid image URL'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
});

export const projectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  longDescription: z.string().optional(),
  image: z.string().url('Please enter a valid image URL'),
  technologies: z.array(z.string()).min(1, 'At least one technology is required'),
  repository: urlSchema.optional(),
  liveUrl: urlSchema.optional(),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
});

export const blogSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  excerpt: z.string().min(10, 'Excerpt must be at least 10 characters'),
  content: z.string().min(100, 'Content must be at least 100 characters'),
  image: z.string().url('Please enter a valid image URL'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
});

// Utility functions
export function validateEmail(email: string): boolean {
  return emailSchema.safeParse(email).success;
}

export function validatePassword(password: string): boolean {
  return passwordSchema.safeParse(password).success;
}

export function validateName(name: string): boolean {
  return nameSchema.safeParse(name).success;
}

export function validatePhone(phone: string): boolean {
  return phoneSchema.safeParse(phone).success;
}

export function validateUrl(url: string): boolean {
  return urlSchema.safeParse(url).success;
}

// Error formatting
export function formatValidationError(error: z.ZodError): Record<string, string> {
  const errors: Record<string, string> = {};

  for (const err of error.errors) {
    const path = err.path.join('.');
    errors[path] = err.message;
  }

  return errors;
}
