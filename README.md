# Lab 1: Node.js and Express server

**Backend Development Fundamentals** · Year II Term II · Aurora  
**Faculty:** Sai Siva Teja 
**Student:** Puneeth Sai · **Registration Number:** 252U1R1204 · **Section:** CSE 2D  

**Live link:** https://backend-development-fundamentals-pu-phi.vercel.app

---

## Objective
Set up a Node.js project and build a small web server, first with the built-in `http` module and then with `Express.js`.

---

## Project Structure

```
lab-01/
├── app.js               # Main Express.js server
├── http-server.js       # Plain HTTP server using built-in http module
├── vercel.json          # Vercel serverless deployment config
├── package.json         # Project metadata and dependencies
├── screenshots/         # Verified browser output screenshots
│   ├── home.png
│   ├── about.png
│   ├── time.png
│   └── not-found.png
└── README.md            # Lab documentation
```

---

## How to Install and Run

1. Navigate to the project directory:
   ```bash
   cd lab-01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Express server:
   ```bash
   npm start
   ```

4. (Optional) Run the plain HTTP version:
   ```bash
   npm run http
   ```

### Environment Variables
| Variable | Description | Default |
|---|---|---|
| `PORT` | Port number on which the server listens | `3000` |

---

## Endpoints

| Method | Path | Description | Status Code |
|--------|------|-------------|:-----------:|
| **GET** | `/` | Welcome text message | `200 OK` |
| **GET** | `/about` | JSON response containing name and section | `200 OK` |
| **GET** | `/time` | Current date and time using `new Date()` | `200 OK` |
| **GET** | *any other path* | Catch-all 404 handler for unknown routes | `404 Not Found` |

---

## Screenshots

### 1. Home Route (`GET /`)
![Home route](screenshots/home.png)

### 2. About Route (`GET /about`)
![About route](screenshots/about.png)

### 3. Time Route (`GET /time`)
![Time route](screenshots/time.png)

### 4. 404 Unknown Route
![404 for an unknown path](screenshots/not-found.png)

---

## Viva Questions & Answers

1. **What is the difference between `package.json` and `node_modules`?**
   - `package.json` is a lightweight configuration manifest that tracks metadata, scripts, and lists the dependencies and versions your project needs.
   - `node_modules` is the actual directory containing the installed physical code of all packages and their sub-dependencies downloaded by npm. It is not committed to version control.

2. **What does `app.listen()` do?**
   - It binds and listens for incoming HTTP connections on the specified port (e.g. 3000) and host, effectively starting the web server.

3. **What do `request` (`req`) and `response` (`res`) represent?**
   - `req` (Request) is an object containing information about the incoming HTTP request made by the client (such as URL, headers, query parameters, method).
   - `res` (Response) is an object used to construct and send back the HTTP response to the client (status code, headers, and body data like text or JSON).

---

## Notes: Problems Faced and Solutions

- **Task 1 (Project setup):** Initialized with `npm init -y` and configured the start scripts for both Express and plain HTTP servers.
- **Task 2 (Express installation):** Installed Express (`npm install express`), which automatically populated `node_modules` and updated `package-lock.json`.
- **Task 3 (Built-in HTTP server):** Implemented `http-server.js` using `http.createServer()` and set proper content-type headers for status 200 and 404 responses.
- **Task 4 & 5 (Express routes):** Rewrote the server in `app.js` using `express()`. Created the three required routes (`/`, `/about`, `/time`).
- **Task 6 (404 Middleware):** Placed a fallback middleware `app.use((req, res) => ...)` at the end of the routing chain to catch all unmatched paths.
- **Task 7 (Verification):** Executed the server locally on port 3000, probed each route with real HTTP requests, and captured browser screenshots for submission.

---

## Course Rules
- Never commit or share `.env` files.
- `node_modules/` is excluded via `.gitignore`.
- Passwords are never stored or logged in plain text.
- Every route returns the appropriate HTTP status code.
