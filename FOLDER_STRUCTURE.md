This document outlines the ideal folder structure for a GSoC-level organization project, designed for scalability, maintainability, and team collaboration.

## 🏗️ Complete Project Structure

```
geekroom-kiet/
├── public/                          # Static assets
│   ├── images/                      # Image assets organized by category
│   │   ├── team/                    # Team member photos
│   │   ├── events/                  # Event photos
│   │   ├── gallery/                 # Gallery images
│   │   └── logos/                   # Logo variations
│   ├── icons/                       # Icon files
│   ├── favicon.ico                  # Favicon
│   ├── og-image.png                # Open Graph image
│   └── robots.txt                  # SEO robots file
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (auth)/                 # Route groups
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/            # Protected routes
│   │   │   ├── admin/
│   │   │   └── profile/
│   │   ├── api/                    # API routes
│   │   │   ├── auth/
│   │   │   ├── events/
│   │   │   ├── projects/
│   │   │   ├── blogs/
│   │   │   ├── contact/
│   │   │   └── upload/
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   ├── loading.tsx             # Loading UI
│   │   ├── error.tsx               # Error UI
│   │   ├── not-found.tsx           # 404 page
│   │   └── sitemap.ts              # SEO sitemap
│   ├── components/                 # React components
│   │   ├── ui/                     # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── toast.tsx
│   │   │   └── index.ts
│   │   ├── layout/                 # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── index.ts
│   │   ├── features/               # Feature-based components
│   │   │   ├── auth/
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── RegisterForm.tsx
│   │   │   │   ├── AuthProvider.tsx
│   │   │   │   └── index.ts
│   │   │   ├── contact/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── ContactSection.tsx
│   │   │   │   └── index.ts
│   │   │   ├── events/
│   │   │   │   ├── EventCard.tsx
│   │   │   │   ├── EventList.tsx
│   │   │   │   ├── EventForm.tsx
│   │   │   │   └── index.ts
│   │   │   ├── projects/
│   │   │   │   ├── ProjectCard.tsx
│   │   │   │   ├── ProjectGrid.tsx
│   │   │   │   ├── ProjectForm.tsx
│   │   │   │   └── index.ts
│   │   │   ├── team/
│   │   │   │   ├── TeamCard.tsx
│   │   │   │   ├── TeamGrid.tsx
│   │   │   │   ├── MemberProfile.tsx
│   │   │   │   └── index.ts
│   │   │   ├── gallery/
│   │   │   │   ├── GalleryGrid.tsx
│   │   │   │   ├── ImageModal.tsx
│   │   │   │   ├── ImageUpload.tsx
│   │   │   │   └── index.ts
│   │   │   └── blogs/
│   │   │       ├── BlogCard.tsx
│   │   │       ├── BlogList.tsx
│   │   │       ├── BlogEditor.tsx
│   │   │       └── index.ts
│   │   ├── common/                 # Common components
│   │   │   ├── LoadingSpinner.tsx
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── PageHeader.tsx
│   │   │   ├── Breadcrumbs.tsx
│   │   │   └── index.ts
│   │   └── providers/              # Context providers
│   │       ├── ThemeProvider.tsx
│   │       ├── AuthProvider.tsx
│   │       ├── ToastProvider.tsx
│   │       └── index.ts
│   ├── hooks/                      # Custom React hooks
│   │   ├── useLocalStorage.ts
│   │   ├── useIntersectionObserver.ts
│   │   ├── useDebounce.ts
│   │   ├── useApi.ts
│   │   ├── useAuth.ts
│   │   ├── useTheme.ts
│   │   └── index.ts
│   ├── lib/                        # Library code
│   │   ├── auth.ts                 # Authentication utilities
│   │   ├── db.ts                   # Database connection
│   │   ├── email.ts                # Email utilities
│   │   ├── storage.ts              # Storage utilities
│   │   ├── analytics.ts            # Analytics utilities
│   │   └── utils.ts                # General utilities
│   ├── utils/                      # Utility functions
│   │   ├── api.ts                  # API client
│   │   ├── validation.ts           # Form validation
│   │   ├── format.ts               # Data formatting
│   │   ├── date.ts                 # Date utilities
│   │   ├── string.ts               # String utilities
│   │   ├── array.ts                # Array utilities
│   │   ├── object.ts               # Object utilities
│   │   └── index.ts
│   ├── types/                      # TypeScript type definitions
│   │   ├── index.ts                # Main types
│   │   ├── api.ts                  # API types
│   │   ├── auth.ts                 # Authentication types
│   │   ├── database.ts             # Database types
│   │   └── components.ts           # Component types
│   ├── constants/                  # Application constants
│   │   ├── index.ts                # Main constants
│   │   ├── api.ts                  # API constants
│   │   ├── routes.ts               # Route constants
│   │   ├── validation.ts           # Validation constants
│   │   └── ui.ts                   # UI constants
│   ├── config/                     # Configuration files
│   │   ├── database.ts             # Database config
│   │   ├── email.ts                # Email config
│   │   ├── storage.ts              # Storage config
│   │   └── analytics.ts            # Analytics config
│   ├── styles/                     # Styling files
│   │   ├── globals.css             # Global styles
│   │   ├── components.css          # Component styles
│   │   ├── utilities.css           # Utility classes
│   │   └── themes/                 # Theme files
│   │       ├── light.css
│   │       └── dark.css
│   └── data/                       # Static data
│       ├── team.ts                 # Team data
│       ├── events.ts               # Events data
│       ├── projects.ts             # Projects data
│       └── navigation.ts           # Navigation data
├── docs/                          # Documentation
│   ├── api/                       # API documentation
│   ├── components/                # Component documentation
│   ├── deployment/                # Deployment guides
│   └── contributing/              # Contributing guides
├── tests/                         # Test files
│   ├── __mocks__/                 # Mock files
│   ├── components/                # Component tests
│   ├── pages/                     # Page tests
│   ├── utils/                     # Utility tests
│   ├── api/                       # API tests
│   └── e2e/                       # End-to-end tests
├── scripts/                       # Build and deployment scripts
│   ├── build.js
│   ├── deploy.js
│   └── generate-sitemap.js
├── .github/                       # GitHub workflows and templates
│   ├── workflows/                 # CI/CD workflows
│   ├── ISSUE_TEMPLATE/            # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md   # PR template
├── .vscode/                       # VS Code configuration
│   ├── settings.json
│   ├── extensions.json
│   └── launch.json
├── package.json                   # Dependencies and scripts
├── package-lock.json              # Lock file
├── next.config.js                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.mjs              # ESLint configuration
├── biome.json                     # Biome configuration
├── postcss.config.mjs             # PostCSS configuration
├── netlify.toml                   # Netlify configuration
├── README.md                      # Project documentation
├── CONTRIBUTING.md                # Contributing guidelines
├── LICENSE                        # License file
└── .env.example                   # Environment variables example
```

## 🎯 Key Principles

### 1. **Feature-Based Organization**
- Components are organized by features rather than by type
- Each feature has its own folder with related components
- Easy to find and maintain related code

### 2. **Separation of Concerns**
- Clear separation between UI, business logic, and data
- Types, constants, and utilities are in dedicated folders
- API logic is separated from UI components

### 3. **Scalability**
- Structure supports team growth
- Easy to add new features without restructuring
- Clear boundaries between different parts of the application

### 4. **Type Safety**
- Comprehensive TypeScript definitions
- API types are separate from component types
- Utility types for common patterns

### 5. **Developer Experience**
- Clear import paths with barrel exports
- Consistent naming conventions
- Easy to navigate and understand

## 📋 Folder Descriptions

### **`/src/app/`** - Next.js App Router
- Contains all pages and API routes
- Uses route groups for organization
- Includes special files like `layout.tsx`, `loading.tsx`, `error.tsx`

### **`/src/components/`** - React Components
- **`ui/`** - Reusable UI components (buttons, inputs, etc.)
- **`layout/`** - Layout components (header, footer, navigation)
- **`features/`** - Feature-specific components organized by domain
- **`common/`** - Common components used across features
- **`providers/`** - Context providers and state management

### **`/src/hooks/`** - Custom React Hooks
- Reusable logic that can be shared across components
- Each hook has its own file
- Barrel export for easy importing

### **`/src/types/`** - TypeScript Definitions
- **`index.ts`** - Main application types
- **`api.ts`** - API request/response types
- **`auth.ts`** - Authentication-related types
- **`database.ts`** - Database schema types

### **`/src/utils/`** - Utility Functions
- Pure functions that don't depend on React
- Organized by functionality (api, validation, format, etc.)
- Easy to test and reuse

### **`/src/constants/`** - Application Constants
- Configuration values and constants
- Organized by domain (api, routes, validation, etc.)
- Centralized and easy to maintain

### **`/src/lib/`** - Library Code
- Third-party library integrations
- Database connections
- External service integrations

## 🔄 Migration Strategy

1. **Phase 1**: Create new folder structure
2. **Phase 2**: Move existing components to new structure
3. **Phase 3**: Update import statements
4. **Phase 4**: Add new features using the new structure
5. **Phase 5**: Remove old files and clean up

## 📚 Best Practices

### **Naming Conventions**
- Use PascalCase for components: `UserProfile.tsx`
- Use camelCase for utilities: `formatDate.ts`
- Use kebab-case for folders: `user-profile/`
- Use UPPER_CASE for constants: `API_ENDPOINTS`

### **Import Organization**
```typescript
// 1. React and Next.js imports
import React from 'react';
import Link from 'next/link';

// 2. Third-party library imports
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// 3. Internal imports (absolute paths)
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/types';

// 4. Relative imports
import './UserProfile.css';
```

### **Barrel Exports**
Each folder should have an `index.ts` file that exports all public members:

```typescript
// src/components/features/contact/index.ts
export { ContactForm } from './ContactForm';
export { ContactSection } from './ContactSection';
export { ContactProvider } from './ContactProvider';
```

This structure provides a solid foundation for a GSoC-level project that can scale with the team and maintain high code quality standards.
