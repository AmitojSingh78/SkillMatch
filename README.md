# SkillMatchAI


A powerful **AI-Powered Resume Parser & Job Matcher** built with Next.js that transforms job searching and career development. This project leverages a comprehensive stack—including Node.js, Express.js, Prisma ORM, OAuth, and custom NLP/ML models—to deliver an intelligent, user-friendly platform that connects candidates with their ideal jobs.


## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Project Structure](#2-project-structure)
  - [3. Backend Setup](#3-backend-setup)
  - [4. Frontend Setup](#4-frontend-setup)
  - [5. Environment Variables](#5-environment-variables)
  - [6. Database Setup with Prisma](#6-database-setup-with-prisma)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Contact](#contact)
- [License](#license)

---

## Overview

**SkillMatchAI** is designed to revolutionize how job seekers find employment and develop their careers. Using advanced AI and NLP techniques, the platform analyzes resumes, identifies skill gaps, matches candidates to relevant job listings, and provides personalized learning paths to help users land their dream jobs.

Built with a modern tech stack and supported by robust AI/ML models, the project emphasizes:

- **Intelligence:** Powered by custom NLP models for accurate resume parsing and job matching.
- **Personalization:** Tailored learning roadmaps and interview preparation.
- **Usability:** Intuitive interface for seamless job searching and application tracking.
- **Scalability:** Architecture designed to handle growing user bases and data volumes.



## Features

- **Resume Parsing & Analysis:**  
  Upload resumes in PDF/DOCX format and extract skills, experience, education, and more using AI.

- **Intelligent Job Matching:**  
  Match users to relevant job listings using semantic similarity algorithms.

- **Skill Gap Identification:**  
  Identify missing skills required for target roles and suggest improvement areas.

- **Personalized Learning Paths:**  
  Generate custom learning roadmaps with integration to platforms like Udemy and Coursera.

- **Application Tracking:**  
  Monitor job applications and their statuses in one centralized dashboard.

- **Interview Preparation:**  
  Practice with an AI-based mock interview bot tailored to specific roles.

- **Career Insights Dashboard:**  
  Access analytics on skills, job market trends, and personal progress.

## 🔧 Tech Stack

- **Framework:** Next.js(FullStack), Tailwind CSS, Shadcn UI

- **Database:** MySQL + Prisma ORM
- **Authentication:** Google & LinkedIn OAuth
- **AI/ML:** Hugging Face, TensorFlow, Custom NLP Models
- **Deployment:** Vercel, Railway/Render, PlanetScale (DB)

---

## Prerequisites

Before setting up the project locally, ensure you have installed:

- **Node.js** (v16 or above)
- **npm**, **yarn**, or **pnpm**
- **MySQL** (either locally installed or accessible via PlanetScale)
- **Git**

---

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/kushaheer/skillmatchai.git
cd skillmatchai
```

### 2. Project Structure

```
/app             # Next.js application (pages, components, API routes)
/components      # Reusable UI components
/lib             # Utility functions and helpers
/prisma          # Database schema and migrations
/models          # AI/ML models and utils
/public          # Static assets
```

### 3. Setup

```bash
cd skillmatchai
npm install
cp .env.example .env
# Configure your DB and OAuth settings in .env
```

### 4. Environment Variables

Create appropriate `.env` files in both frontend and backend directories based on the provided examples.

For backend:
```
# Database
DATABASE_URL="mysql://user:password@host:port/database"

# Authentication
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"
LINKEDIN_CLIENT_ID="your-client-id"
LINKEDIN_CLIENT_SECRET="your-client-secret"

# AI Services
HUGGINGFACE_API_KEY="your-api-key"
```

For frontend:
```
NEXT_PUBLIC_API_URL="http://localhost:5000/api"
NEXT_PUBLIC_GOOGLE_CLIENT_ID="your-client-id"
```

### 5. Database Setup with Prisma

Set up your database from the root directory:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

Seed the database with starter data:

```bash
npx prisma db seed
```

---

## Running the Project

### Development Server

Start the Next.js development server:

```bash
npm run dev
```

Your application should now be running at [http://localhost:3000](http://localhost:3000).

### Production Build

Build and start the production version:

```bash
npm run build
npm start
```

---

## Testing

Run tests:

```bash
npm test
```

The project uses:
- React Testing Library for component testing
- AI/ML model unit testing and validation

---

## Deployment

The project is configured for easy deployment:

- **Application:** Deploy to [Vercel](https://vercel.com/)
- **Database:** Use [PlanetScale](https://planetscale.com/)

Detailed deployment instructions can be found in the `/docs` directory.

---

## Roadmap

- [ ] Resume parsing with OCR + NLP
- [ ] Semantic job matching
- [ ] Skill gap analytics
- [ ] Personalized course recommendations
- [ ] Interview preparation bot
- [ ] Job tracker and insights
- [ ] Admin dashboard

---

## Contributing

Contributions are welcome! If you'd like to contribute to SkillMatchAI, please follow these guidelines:

1. **Fork the Repository:**  
   Click on the Fork button at the top right of the repository page to create your own copy.

2. **Create a Branch:**  
   Create a new branch for your feature or bug fix.

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Implement Your Changes:**  
   Make sure your code adheres to the project's coding standards.

4. **Commit and Push:**  
   Commit your changes with clear and descriptive commit messages.

   ```bash
   git commit -m "Add some AmazingFeature"
   git push origin feature/AmazingFeature
   ```

5. **Open a Pull Request:**  
   Navigate to the repository on GitHub and open a pull request against the main branch. Provide a clear description of your changes.

6. **Review & Merge:**  
   Your pull request will be reviewed by the maintainers. Once approved, it will be merged.


## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

Happy job hunting! 🚀