# 🚀 Geek Room KIET

<div align="center">

![Geek Room KIET Logo](public/logo.png)

</div>

## 📖 About

**Geek Room KIET** is the official website for the Geek Room chapter at KIET (Krishna Institute of Engineering and Technology). We're a passionate community of students dedicated to fostering a dynamic tech culture through interdisciplinary learning, hands-on workshops, coding sessions, and collaborative projects.

### 🎯 Our Mission
- **Empower students** to sharpen their technical expertise
- **Explore cutting-edge technologies** and build innovative projects
- **Foster collaboration** through workshops, competitions, and team projects
- **Create a supportive space** for students to connect, learn, and make a lasting impact

---

## ✨ Features

### 🏠 **Homepage**
- **Splash Screen**: Eye-catching animated introduction
- **Why Join Us**: Compelling reasons to join our community
- **Statistics**: Live member count and event statistics
- **Gallery Carousel**: Showcase of past events and activities
- **Team Structure**: Interactive team cards with smooth animations
- **Contact Form**: Easy way to get in touch with us

### 🎨 **Design & UX**
- **Modern UI**: Clean, professional design with dark theme
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: CSS-based animations for better performance
- **Accessibility**: Built with accessibility best practices
- **Fast Loading**: Optimized for speed and performance

### 🛠 **Technical Features**
- **Next.js 15**: Latest React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP Animations**: Smooth, performant animations
- **Form Handling**: React Hook Form with validation
- **Image Optimization**: Next.js Image component for optimal loading

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0 or later
- **Bun** (recommended) or npm/yarn/pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/geekroom-kiet.git
   cd geekroom-kiet
   ```

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   
   # Or using yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   # Using Bun
   bun run dev
   
   # Or using npm
   npm run dev
   
   # Or using yarn
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

### **Next Steps**
- **Want to contribute?** Check out our [Contributing Guide](CONTRIBUTING.md)
- **Need help?** Open an [issue](https://github.com/your-username/geekroom-kiet/issues)
- **Have questions?** Join our community discussions

---

## 📁 Project Structure

```
geekroom-kiet/
├── public/                 # Static assets
│   ├── logo.png           # Main logo
│   ├── *.jpg              # Gallery images
│   └── *.png              # Team member photos
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── blogs/         # Blog pages
│   │   ├── events/        # Events pages
│   │   ├── gallery/       # Gallery pages
│   │   ├── join-us/       # Join us page
│   │   ├── projects/      # Projects pages
│   │   └── team/          # Team pages
│   ├── components/        # React components
│   │   ├── ui/            # Reusable UI components
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Navbar.tsx
│   │   └── WhyJoinUsSection.tsx
│   └── lib/               # Utility functions
│       └── utils.ts
├── CONTRIBUTING.md        # Contribution guidelines
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

---
## 🎨 Tech Stack

### **Frontend**
- **Framework**: Next.js 15.2.0 with App Router
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: GSAP 3.12.7
- **Forms**: React Hook Form with Zod validation

### **Development Tools**
- **Package Manager**: Bun (with npm/yarn support)
- **Linting**: Biome (ESLint alternative)
- **Type Checking**: TypeScript
- **Code Formatting**: Biome formatter

### **Deployment**
- **Platform**: Vercel (recommended)
- **Static Export**: Supported for other platforms

---

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps to get started:

### **Step 1: Fork the Repository**
1. Go to the [Geek Room KIET repository](https://github.com/GEEK-ROOM-KIET/geekroom-kiet)
2. Click the **"Fork"** button in the top-right corner
3. This creates a copy of the project in your GitHub account

### **Step 2: Clone Your Fork**
```bash
# Replace YOUR-USERNAME with your GitHub username
git clone https://github.com/YOUR-USERNAME/geekroom-kiet.git
cd geekroom-kiet
```

### **Step 3: Set Up Upstream Remote**
```bash
# Add the original repository as upstream
git remote add upstream https://github.com/your-username/geekroom-kiet.git

# Verify your remotes
git remote -v
```

### **Step 4: Create a Feature Branch**
```bash
# Create and switch to a new branch
git checkout -b feat/your-feature-name

# Examples:
# git checkout -b feat/add-new-component
# git checkout -b fix/navbar-bug
# git checkout -b docs/update-readme
```

### **Step 5: Make Your Changes**
- Make your changes locally
- Test your changes thoroughly
- Follow the existing code style
- Write clear commit messages

### **Step 6: Commit Your Changes**
```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: Add new component for better UX"

# Examples of good commit messages:
# "feat: Add dark mode toggle"
# "fix: Resolve navbar alignment issue"
# "docs: Update installation instructions"
```

### **Step 7: Push to Your Fork**
```bash
# Push your branch to your fork
git push origin feat/your-feature-name
```

### **Step 8: Create a Pull Request**
1. Go to your fork on GitHub
2. Click **"Compare & pull request"**
3. Fill out the PR template with:
   - Clear description of changes
   - Screenshots (for UI changes)
   - Link to related issues
4. Submit the pull request

### **Step 9: Keep Your Fork Updated**
```bash
# Fetch latest changes from upstream
git fetch upstream

# Switch to main branch
git checkout main

# Merge upstream changes
git merge upstream/main

# Push updates to your fork
git push origin main
```

### **📋 Development Guidelines**
- **Read our [Contributing Guide](CONTRIBUTING.md)** for detailed guidelines
- Follow the existing code style and patterns
- Write clear, descriptive commit messages
- Test your changes locally before submitting
- Update documentation if needed
- Be respectful and collaborative in discussions
- Ask questions if you're unsure about anything

### **🐛 Finding Issues to Work On**
1. Check the [Issues tab](https://github.com/your-username/geekroom-kiet/issues)
2. Look for issues labeled `good first issue` or `help wanted`
3. Comment on the issue to express interest
4. Wait for assignment before starting work

---

## 🙏 Acknowledgments

- **Geek Room Global** for the inspiration and community support
- **KIET** for providing the platform for our tech community
- **All Contributors** who help make this project better
- **Open Source Community** for the amazing tools and libraries

---

<div align="center">

**Made with ❤️ by Geek Room KIET**

</div>