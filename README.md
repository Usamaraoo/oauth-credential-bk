# RNE OAuth -- Authentication Service (Express + TypeScript + Prisma + OAuth Providers)

A production-grade authentication backend built using **Node.js**,
**Express**, **TypeScript**, **Prisma**, and **OAuth (Google, GitHub)**
--- designed to integrate cleanly with **Next.js** frontends.

This service provides **email/password login**, **JWT-based
authentication**, **secure cookie handling**, and **OAuth login flows**.

## 🚀 Tech Stack

-   Node.js + Express
-   TypeScript
-   Prisma ORM (PostgreSQL)
-   JWT Authentication
-   OAuth (Google + GitHub)
-   Cookie-based Sessions (HttpOnly)
-   Next.js Integration Ready

## 📂 Project Structure

    /src
      /auth
        auth.controller.ts
        auth.service.ts
        auth.routes.ts
        auth.types.ts
      /middleware
        authMiddleware.ts
      /utils
        response.ts
        jwt.ts
      server.ts

    /prisma
      schema.prisma

## ⚙️ Setup Instructions

### 1. Install dependencies

    npm install

### 2. Setup environment variables

Create a `.env` file:

    DATABASE_URL="postgresql://postgres:password@localhost:5432/rne_oauth"

    JWT_SECRET="your_jwt_secret_here"
    JWT_EXPIRES_IN="1d"

    GOOGLE_CLIENT_ID="your_google_client_id"
    GOOGLE_CLIENT_SECRET="your_google_client_secret"
    GOOGLE_REDIRECT_URL="http://localhost:5000/auth/google/callback"

    GITHUB_CLIENT_ID="your_github_client_id"
    GITHUB_CLIENT_SECRET="your_github_client_secret"
    GITHUB_REDIRECT_URL="http://localhost:5000/auth/github/callback"

## 🗄️ Database Setup

    npx prisma migrate dev
    npx prisma generate

## 🔐 Email/Password Auth

### Signup

    POST /auth/signup

### Login

    POST /auth/login

## 🧁 Session Cookie

Set-Cookie: token=jwt; HttpOnly; SameSite=Lax; Secure

## 🔐 Protected Routes

Use `authMiddleware` to protect routes.

## 🌐 Google OAuth

    GET /auth/google
    GET /auth/google/callback

## 🐙 GitHub OAuth

    GET /auth/github
    GET /auth/github/callback

## ⚡ Next.js Integration Guide

-   Trigger OAuth: redirect to backend
-   Backend redirects back after setting JWT cookie
-   Use `fetch(..., { credentials: "include" })`

## 🧪 Testing

    npm run dev

## 📜 Scripts

    npm run dev
    npm run build
    npm run start

## 📌 Features Checklist

-   Email/password signup
-   Password hashing
-   JWT login
-   HttpOnly cookies
-   Google OAuth
-   GitHub OAuth
-   Prisma ORM
-   Next.js integration
