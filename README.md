# Moonlightpedia Documentation

Moonlightpedia is a modern web application for managing governance, risk, and compliance, featuring a Java Spring Boot backend and a React frontend.

## Table of Contents
- [Project Overview](#project-overview)
- [How to Run Backend](#how-to-run-backend)
- [Backend API Endpoints](#backend-api-endpoints)
- [How to Run Frontend](#how-to-run-frontend)
- [Frontend Pages](#frontend-pages)

## Project Overview
Moonlightpedia provides tools for managing governance, risk, and compliance in banking operations. The backend is built with Spring Boot (Java), and the frontend uses React with Bootstrap and custom styling.

## How to Run Backend
1. Open a terminal in the `backend/` directory.
2. Build the project:
   ```bash
   ./mvnw clean install
   ```
3. Run the backend server:
   ```bash
   ./mvnw spring-boot:run
   ```
   The backend will be available at `http://localhost:8080` by default.

## Backend API Endpoints
- `GET /hello` — Returns a hello message (test endpoint)
- (Add more endpoints as you implement features)

API endpoints are defined in `backend/src/main/java/com/moon/moonlightpedia/controllers/`.

## How to Run Frontend
1. Open a terminal in the `frontend/` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

## Frontend Pages
- **Home/Dashboard:** `/` — Main dashboard with welcome and content image
- **About:** `/about` — Project and team information

Pages are located in `frontend/src/pages/`. Navigation is via the top navbar.

---

For more details, see the `frontend/README.md` and `.github/copilot-instructions.md`.
