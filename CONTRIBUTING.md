# Contributing Guide

Thank you for considering contributing! 🎉 We’re excited to welcome you to our community.  
Please take a few minutes to read this guide to understand our expectations and ensure a smooth workflow.

---

## 📜 Code of Conduct
We follow a **Code of Conduct** to maintain a friendly, inclusive, and respectful environment.  
Please make sure to read it before contributing.  

👉  

---

## 🛠 How to Contribute
We welcome contributions of all kinds—bug fixes, features, documentation, and ideas!  

### 🔎 Finding an Issue
1. Go to the **Issues** tab in the repository.  
2. Look for issues with labels like **`good first issue`** or **`help wanted`**.  
3. Comment on the issue you’d like to work on:  
   > "I'd like to work on this issue."  
4. Wait for a maintainer to assign it to you (to avoid duplicate work).

---

## 🚀 Core Workflow

### 1️⃣ Fork the Repository
Click the **Fork** button on the top right of the repository page.  
This creates a copy of the project in your GitHub account.

### 2️⃣ Clone Your Fork
Clone your fork locally:

```bash
git clone https://github.com/YOUR-USERNAME/geekroom-kiet
cd geekroom-kiet
```

### 3️⃣ Create a New Branch
Always create a new branch for your work (never commit directly to `main` or `dev`):

```bash
# Create a new branch and switch to it
git checkout -b feat/add-login-button
```

✅ Examples:
- For new features: `feat/add-login-button`
- For bug fixes: `fix/navbar-alignment-bug`

### 4️⃣ Make Your Changes
Make your changes locally, then commit them with a **clear and descriptive commit message**:

```bash
# Stage your changes
git add .

# Commit your changes
git commit -m "feat: Add login button to the navbar"
```

---

## 🔧 Development Setup

After cloning the repository:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# The app will be available at http://localhost:3000
```

---

## 🔄 Submitting a Pull Request (PR)

### Step 1: Push Your Branch
Push your branch to your fork:

```bash
git push origin feat/add-login-button
```

### Step 2: Open a Pull Request

1. Go to your fork on GitHub.
2. You’ll see a **Compare & pull request** option—click it.
3. Ensure:
    - **Base repository:** The official repository
    - **Base branch:** `dev` (⚠️ not `main`)
    - **Head repository:** Your fork
    - **Compare branch:** Your feature/bugfix branch

### Step 3: Fill Out the PR Template
Your PR should follow this format:

```bash
### Closes: #<issue_number>

### Description
A clear summary of the changes.

### Changes Made
- Added `Button.js` component
- Integrated button into `Navbar.js`
- Updated docs for the new feature

### Screenshots/GIFs
*(Required for all UI changes)*

### Checklist
- [ ] I have read the [CONTRIBUTING.md](./CONTRIBUTING.md)
- [ ] My code follows the project’s coding standards
- [ ] I have tested my changes locally
- [ ] I have linked this PR to the issue 
```

---

## 📌 Rules & Best Practices

❌ **Don’t push directly** to the main repository.  
❌ **Don’t create PRs to `main`** — use `dev` only.  
❌ **Don’t start work without being assigned** to an issue.  
❌ **Don’t ignore the PR template** (missing info may lead to PR closure).

✅ **Keep your fork synced** with upstream:

```bash
git checkout dev
git pull upstream dev
git push origin dev
```

✅ **Write clear commit messages.**  
✅ **Be respectful and collaborative.**
