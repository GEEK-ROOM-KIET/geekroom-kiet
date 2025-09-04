// Application constants

// Site Configuration
export const SITE_CONFIG = {
  name: 'Geek Room KIET',
  description: 'Official website of Geek Room KIET - A vibrant community dedicated to leveling up your coding skills!',
  url: 'https://geekroom-kiet.vercel.app',
  ogImage: '/og-image.png',
  links: {
    twitter: 'https://twitter.com/geekroomkiet',
    github: 'https://github.com/GEEK-ROOM-KIET/geekroom-kiet',
    linkedin: 'https://linkedin.com/company/geekroom-kiet',
    instagram: 'https://instagram.com/geekroomkiet',
  },
} as const;

// Navigation Items
export const NAV_ITEMS = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Team',
    href: '/team',
  },
  {
    title: 'Events',
    href: '/events',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Gallery',
    href: '/gallery',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
  {
    title: 'Join Us',
    href: '/join-us',
  },
] as const;

// Team Structure
export const TEAM_STRUCTURE = [
  {
    id: 'tech',
    name: 'Tech',
    description: 'Our Tech team is divided into DSA, Development, AI-ML, and Emerging Tech subdivisions, each focusing on innovative projects that benefit the community and advance technical skills.',
    icon: 'Code',
    color: '#FF5722',
    subdivisions: ['DSA', 'Development', 'AI-ML', 'Emerging Tech'],
  },
  {
    id: 'events',
    name: 'Events',
    description: 'Open to all members, events are driven by the collective efforts of interested members from all the teams. The Events team organizes workshops, competitions, etc to foster a culture of learning and collaboration.',
    icon: 'Calendar',
    color: '#0F9D58',
    subdivisions: ['Workshops', 'Competitions', 'Meetups', 'Hackathons'],
  },
  {
    id: 'robotics',
    name: 'Robotics',
    description: 'The Robotics team empowers members to design, build, and program robots through engaging projects and interactive workshops.',
    icon: 'Bug',
    color: '#FF5722',
    subdivisions: ['Hardware', 'Programming', 'AI Integration', 'Innovation'],
  },
  {
    id: 'content',
    name: 'Content',
    description: 'The Content team produces engaging blogs, newsletters, and video content that keeps our community informed and inspired, sharing insights on the latest trends and developments.',
    icon: 'LayoutDashboard',
    color: '#0F9D58',
    subdivisions: ['Blogs', 'Newsletters', 'Videos', 'Documentation'],
  },
  {
    id: 'marketing',
    name: 'Marketing & Design',
    description: 'The Marketing & Design team creates visually compelling campaigns, promotes our initiatives, and ensures our message resonates with a wide audience.',
    icon: 'Paintbrush',
    color: '#FF5722',
    subdivisions: ['Design', 'Social Media', 'Branding', 'Campaigns'],
  },
  {
    id: 'research',
    name: 'Research',
    description: 'The Research team promotes a strong research culture at KIET, offering a space for students to learn research methodologies and conduct meaningful studies.',
    icon: 'BookOpen',
    color: '#0F9D58',
    subdivisions: ['Methodologies', 'Academic Studies', 'Innovation', 'Publications'],
  },
] as const;

// Event Types
export const EVENT_TYPES = [
  { value: 'workshop', label: 'Workshop' },
  { value: 'competition', label: 'Competition' },
  { value: 'meetup', label: 'Meetup' },
  { value: 'hackathon', label: 'Hackathon' },
] as const;

// Project Status
export const PROJECT_STATUS = [
  { value: 'planning', label: 'Planning', color: 'blue' },
  { value: 'in-progress', label: 'In Progress', color: 'yellow' },
  { value: 'completed', label: 'Completed', color: 'green' },
  { value: 'archived', label: 'Archived', color: 'gray' },
] as const;

// Blog Status
export const BLOG_STATUS = [
  { value: 'draft', label: 'Draft', color: 'gray' },
  { value: 'published', label: 'Published', color: 'green' },
  { value: 'archived', label: 'Archived', color: 'red' },
] as const;

// Contact Form Types
export const CONTACT_TYPES = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'join', label: 'Join Our Community' },
  { value: 'event', label: 'Event Related' },
  { value: 'sponsor', label: 'Sponsorship' },
  { value: 'other', label: 'Other' },
] as const;

// Technology Tags
export const TECHNOLOGY_TAGS = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js',
  'Python', 'Java', 'C++', 'C#', 'Go', 'Rust', 'Swift',
  'HTML', 'CSS', 'Tailwind CSS', 'SASS', 'SCSS',
  'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase',
  'AWS', 'Docker', 'Kubernetes', 'Git', 'GitHub',
  'Machine Learning', 'AI', 'Data Science', 'Blockchain',
  'Web3', 'Mobile Development', 'iOS', 'Android',
  'DevOps', 'Cloud Computing', 'Cybersecurity',
] as const;

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 800,
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    register: '/api/auth/register',
    refresh: '/api/auth/refresh',
  },
  users: {
    profile: '/api/users/profile',
    update: '/api/users/update',
  },
  teams: '/api/teams',
  events: '/api/events',
  projects: '/api/projects',
  blogs: '/api/blogs',
  gallery: '/api/gallery',
  contact: '/api/contact',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  VALIDATION: 'Please check your input and try again.',
  SERVER: 'Server error. Please try again later.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  CONTACT_SENT: 'Thank you for your message! We\'ll get back to you soon.',
  PROFILE_UPDATED: 'Your profile has been updated successfully.',
  EVENT_REGISTERED: 'You have been registered for the event.',
  PROJECT_CREATED: 'Project created successfully.',
  BLOG_PUBLISHED: 'Blog post published successfully.',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'geekroom-theme',
  USER: 'geekroom-user',
  TOKEN: 'geekroom-token',
  PREFERENCES: 'geekroom-preferences',
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// File Upload
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
  ALLOWED_EXTENSIONS: ['.jpg', '.jpeg', '.png', '.webp', '.gif'],
} as const;
