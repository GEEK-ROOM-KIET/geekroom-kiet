// API-specific type definitions

import { ApiResponse, PaginatedResponse } from './index';

// API Endpoints
export type ApiEndpoint = 
  | '/api/auth/login'
  | '/api/auth/logout'
  | '/api/auth/register'
  | '/api/users'
  | '/api/users/profile'
  | '/api/teams'
  | '/api/events'
  | '/api/projects'
  | '/api/blogs'
  | '/api/gallery'
  | '/api/contact'
  | '/api/analytics';

// HTTP Methods
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// API Request Types
export interface ApiRequest {
  method: HttpMethod;
  endpoint: ApiEndpoint;
  body?: Record<string, any>;
  query?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
}

// API Error Types
export interface ApiError {
  status: number;
  message: string;
  code?: string;
  details?: Record<string, any>;
}

// Authentication API Types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  token: string;
  refreshToken: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// User API Types
export interface UpdateProfileRequest {
  name?: string;
  bio?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    portfolio?: string;
  };
}

// Event API Types
export interface CreateEventRequest {
  title: string;
  description: string;
  date: string;
  location: string;
  type: string;
  maxParticipants?: number;
  image: string;
  tags: string[];
}

export interface UpdateEventRequest extends Partial<CreateEventRequest> {
  id: string;
}

// Project API Types
export interface CreateProjectRequest {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  repository?: string;
  liveUrl?: string;
  tags: string[];
}

export interface UpdateProjectRequest extends Partial<CreateProjectRequest> {
  id: string;
}

// Blog API Types
export interface CreateBlogRequest {
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

export interface UpdateBlogRequest extends Partial<CreateBlogRequest> {
  id: string;
}

// Gallery API Types
export interface UploadImageRequest {
  file: File;
  title?: string;
  description?: string;
  eventId?: string;
  tags: string[];
}

// Contact API Types
export interface ContactRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
  type: string;
}

// Query Parameters
export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams {
  search?: string;
  tags?: string[];
  status?: string;
  dateFrom?: string;
  dateTo?: string;
}

export interface EventQueryParams extends PaginationParams, FilterParams {
  type?: string;
  status?: string;
}

export interface ProjectQueryParams extends PaginationParams, FilterParams {
  status?: string;
  technologies?: string[];
}

export interface BlogQueryParams extends PaginationParams, FilterParams {
  status?: string;
  authorId?: string;
}

// API Response Types
export type UsersResponse = PaginatedResponse<{
  id: string;
  name: string;
  email: string;
  role: string;
  avatar?: string;
  joinDate: string;
}>;

export type TeamsResponse = ApiResponse<{
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  members: any[];
  lead: any;
}[]>;

export type EventsResponse = PaginatedResponse<{
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: string;
  status: string;
  image: string;
  tags: string[];
}>;

export type ProjectsResponse = PaginatedResponse<{
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: string;
  repository?: string;
  liveUrl?: string;
  tags: string[];
}>;

export type BlogsResponse = PaginatedResponse<{
  id: string;
  title: string;
  excerpt: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  publishDate: string;
  image: string;
  tags: string[];
  readTime: number;
  views: number;
  likes: number;
}>;

export type GalleryResponse = PaginatedResponse<{
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  tags: string[];
  uploadDate: string;
}>;
