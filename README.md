# Lab 1: Node.js and Express server

Puneeth Sai · 252U1R1204 · CSE 2D

**Live link:** Not applicable (tested locally with browser/Postman)

## How to run

1. Navigate to the project directory:
   ```bash
   cd lab-01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the Express server:
   ```bash
   npm start
   ```

4. (Optional) Run the plain HTTP server:
   ```bash
   npm run http
   ```

### Environment Variables
- `PORT` (Optional): The port on which the server listens. Defaults to `3000`.

## Endpoints

| Method | Path | Description | Status Code |
|--------|------|-------------|-------------|
| GET | `/` | Welcome text | 200 OK |
| GET | `/about` | JSON with name and section | 200 OK |
| GET | `/time` | Current date and time using `new Date()` | 200 OK |
| GET | any other path | Page not found message | 404 Not Found |

## Screenshots

![Home route](screenshots/home.png)

![About route](screenshots/about.png)

![Time route](screenshots/time.png)

![404 for an unknown path](screenshots/not-found.png)

## Notes: problems faced and how you solved them

- **Task 1 (Package setup):** Created the lab folder and ran `npm init -y` to generate `package.json`. Understood `name`, `version`, `scripts`, and `dependencies` fields.
- **Task 2 (Installing Express):** Installed Express via `npm install express`. Checked that `node_modules` and `package-lock.json` were created.
- **Task 3 (Plain HTTP Server):** Created `http-server.js` using Node's built-in `http` module and tested responses on port 3000.
- **Task 4 & 5 (Express Server):** Rewrote the server in `app.js` using `express()`. Created the three required GET routes (`/`, `/about`, `/time`).
- **Task 6 (404 Handling):** Added a catch-all middleware using `app.use((req, res) => ...)` to return a 404 status code for unknown URLs.
- **Task 7 (Testing):** Verified each endpoint in the browser and confirmed the proper HTTP status codes (200 for valid routes and 404 for unmatched routes).
