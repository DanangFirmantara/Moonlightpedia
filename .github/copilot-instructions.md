# Copilot Instructions for Moonlightpedia

## Project Overview
- This is a monorepo with a Java Spring Boot backend (`backend/`) and a React frontend (`frontend/`).
- The frontend is bootstrapped with Create React App and uses React-Bootstrap, custom CSS, and Lucide icons.
- The backend is a Maven project with MapStruct and Lombok for DTO/entity mapping and code generation.

## Key Directories & Files
- `frontend/src/pages/` — Page-level React components (e.g., `Home.js`, `About.js`).
- `frontend/src/components/` — Reusable UI components (e.g., `CustomNavbar.js`).
- `frontend/src/services/` — API call logic (e.g., `api.js`).
- `frontend/src/pages/styling.css` — Central CSS for custom page styles.
- `frontend/src/assets/` — Images for UI (e.g., `dashboard.png`, `footer.png`, `logo.png`).
- `backend/src/main/java/com/moon/moonlightpedia/` — Main Spring Boot app and modules.

## Frontend Patterns
- Use Bootstrap classes and custom CSS modules for layout and styling. See `styling.css` for page-level styles.
- Navigation is handled with React Router (`react-router-dom`).
- Use Lucide icons by importing from `lucide-react` (e.g., `import { Bell } from 'lucide-react'`).
- Images are imported from `src/assets/` and used as React imports.
- The footer and navbar are styled with background images and flexbox.
- Place API calls in `services/api.js` and import them into components/pages.

## Backend Patterns
- Use MapStruct for mapping between entities and DTOs. Annotation processor versions must be specified in `pom.xml`.
- Lombok is used for boilerplate code reduction (getters/setters/builders).
- Main entry: `MoonlightpediaApplication.java`.
- Controllers are in `controllers/`, entities in `entities/`, and repositories in `repositories/`.

## Developer Workflows
- **Frontend:**
  - Start dev server: `npm start` in `frontend/`.
  - Build: `npm run build`.
  - Test: `npm test`.
  - Add new pages/components in their respective folders and import as needed.
- **Backend:**
  - Build: `./mvnw clean install` in `backend/`.
  - Run: `./mvnw spring-boot:run`.
  - Tests: `./mvnw test`.
- **Integration:**
  - The frontend expects backend endpoints (e.g., `/hello`) to be available at the same origin or proxied.

## Conventions & Tips
- Keep all custom styles in `styling.css` and use semantic class names.
- Use functional React components and hooks.
- Keep business logic (API, mapping) out of UI components.
- Use absolute imports for images/assets for clarity.
- When adding new backend features, update both the controller and DTO/entity/mapper as needed.

## Examples
- To add a new page, create a file in `src/pages/`, add a route in `App.js`, and style in `styling.css`.
- To call a backend API, add a function in `services/api.js` and use it in your component with `useEffect`.

---

If you update project structure or conventions, please update this file to keep Copilot and other AI agents productive.
