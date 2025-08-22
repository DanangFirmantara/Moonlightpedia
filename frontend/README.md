
# Moonlightpedia Frontend

Moonlightpedia is a modern web application for managing governance, risk, and compliance, built with React and integrated with a Spring Boot backend.

## Table of Contents
- [Project Overview](#project-overview)
- [How to Run](#how-to-run)
- [Accessing Pages](#accessing-pages)
- [Project Structure](#project-structure)

## Project Overview
This frontend is built with [Create React App](https://github.com/facebook/create-react-app), using React-Bootstrap for UI, custom CSS for styling, and Lucide icons. It communicates with the backend via REST APIs.

## How to Run
1. **Install dependencies:**
	```bash
	npm install
	```
2. **Start the development server:**
	```bash
	npm start
	```
	The app will be available at [http://localhost:3000](http://localhost:3000).

3. **Build for production:**
	```bash
	npm run build
	```

4. **Run tests:**
	```bash
	npm test
	```

## Accessing Pages
- **Home/Dashboard:** `/`  
  Displays the dashboard with a welcome message and main content image.
- **About:** `/about`  
  Shows information about the project and its creators.

Navigation is handled via the top navbar. You can add more pages by creating new files in `src/pages/` and updating the router in `src/App.js`.

## Project Structure
- `src/pages/` — Main pages (e.g., `Home.js`, `About.js`)
- `src/components/` — Reusable UI components (e.g., `CustomNavbar.js`)
- `src/services/` — API logic
- `src/assets/` — Images and static assets
- `src/pages/styling.css` — Central custom styles