# ALX Listing App

A modern Airbnb clone built with Next.js, TypeScript, and TailwindCSS. This project demonstrates best practices in React development, component reusability, and modern web development techniques.

## 🚀 Project Overview

The ALX Listing App is designed to showcase property listings with a clean, responsive interface. Built as part of the ALX Software Engineering program, this project emphasizes:

- **Type Safety**: Full TypeScript integration for robust development
- **Component Reusability**: Modular components for scalable architecture
- **Modern Styling**: TailwindCSS for responsive, utility-first design
- **Code Quality**: ESLint configuration for consistent code standards

## 🏗️ Project Structure

alx-listing-app/
├── components/
│ └── common/
│ ├── Card.tsx # Reusable card component for property listings
│ └── Button.tsx # Reusable button component with variants
├── interfaces/
│ └── index.ts # TypeScript interfaces and type definitions
├── constants/
│ └── index.ts # Application constants and configuration
├── pages/
│ ├── _app.tsx # Next.js app wrapper
│ ├── _document.tsx # Custom document configuration
│ └── index.tsx # Home page with featured properties
├── public/
│ └── assets/
│ ├── images/ # Property images and placeholders
│ └── icons/ # SVG icons and graphics
├── styles/
│ └── globals.css # Global styles with Tailwind imports
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── next.config.js # Next.js configuration
└── package.json # Project dependencies and scripts


### Directory Purpose

- **`components/common/`**: Reusable UI components used throughout the app
- **`interfaces/`**: Type definitions for props, models, etc.
- **`constants/`**: Static values like configuration, enums, API URLs
- **`public/assets/`**: Static files like images and icons

## 🛠️ Technologies Used

- [Next.js 13+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [React](https://reactjs.org/)

## 📋 Prerequisites

Make sure you have the following installed:

- **Node.js 16+**
- **npm** or **yarn**
- **VS Code** with the following extensions:
  - TypeScript
  - TailwindCSS IntelliSense
  - ESLint

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app

