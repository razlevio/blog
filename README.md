# Next-Stack Boilerplate

## Description

This repository contains the structure of my personalized tech-stack using next.js and custom configuration settings that I've developed over the years. This structure and architecture is the embodiment of lessons learned from multiple projects, aiming to enhance setup efficiency, reduce time-to-development, and prompote clean architecture and consistency. It offers an optimized way to start a new project, minimizing boilerplate code and configuration efforts, and allowing me to focus more on the actual development.

## Technologies

### Programming Language 🧬

- **TypeScript**: JavaScript superset with static type definitions.

### Frameworks 🗂

- **React**: framework for building user interfaces.
- **Next.js**: react framework that enables additional functionalities.

### Styles 🌈

- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Shadcn UI & Radix UI**: component libraries for building high-quality, accessible design systems.
- **Lucide icons**: A beautifully crafted open source icon library.
- **Geist font**: A modern, clean font ideal for UI design.
- **Next-Themes**: An abstraction for themes in Next.js apps

### Databases 📀

- **Prisma**: Prisma is an open-source database toolkit that includes an ORM for SQL databases.
- **Convex**: Alternative real-time document based database (BaaS).

### Authentication 🕵🏻

- **Clerk**: A complete user management system with authentication and user profiles.

### Libraries 📚

- **Zustand**: A small, fast, and scalable bearbones state-management solution.
- **Zod**: A TypeScript-first schema validation library.
- **React Hook Form**: A library to manage forms with ease in React.
- **useHooks-ts**: A collection of reusable React hooks.
- **Sonner Toast**: A lightweight and easy-to-use toast notification library.
- **Lodash**: A modern JavaScript utility library delivering modularity, performance, & extras.
- **Date-fns**: A modern JavaScript date utility library.
- **@vercel/analytics**: Analytics tools for Vercel deployments.
- **@vercel/speed-insights**: Tools for analyzing site performance with Vercel.

### Dev Tools ⚒️

- **ESLint**: A static code analysis tool for identifying problematic patterns.
- **Prettier**: An opinionated code formatter.
- **Husky**: A tool to improve your commits using Git hooks.
- **Lint-staged**: A library to run scripts on staged files in Git.
- **Commitlint**: A tool for enforcing a conventional commit format.

## Project Setup
To set up the project and update dependencies to their latest versions, run the following command:

```bash
npm install
ts-node setup.ts
```

This process will ensure that your project dependencies are up-to-date.

Lastly update `.env.example -> .env` and add
required keys
