# Backend Development Fundamentals

**Student Details:**
- **Name:** Puneeth Sai
- **Registration Number:** 252U1R1204
- **Branch / Section:** CSE 2D
- **Course:** Backend Development Fundamentals (Year II Term II)
- **Institution:** Aurora
- **Faculty:** Joel Prashanth D

---

## 📚 Course Overview

This repository contains all laboratory exercises and coursework for **Backend Development Fundamentals**, covering server-side programming using Node.js and Express.js, relational database operations with SQLite, RESTful API design, authentication, and MongoDB integration.

---

## 🗂️ Lab Index

| Lab | Topic | Folder | Status |
|:---:|:---|:---:|:---:|
| **Lab 01** | Node.js and Express.js Fundamentals | [`lab-01/`](./lab-01) | ✅ Completed |
| **Lab 02** | SQLite and Relational Database Operations | `lab-02/` | ⏳ Upcoming |
| **Lab 03** | RESTful API Development and Validation | `lab-03/` | ⏳ Upcoming |
| **Lab 04** | Authentication and User Management | `lab-04/` | ⏳ Upcoming |
| **Lab 05** | Middleware, Authorization and Error Handling | `lab-05/` | ⏳ Upcoming |
| **Lab 06** | File Handling and Asynchronous Operations | `lab-06/` | ⏳ Upcoming |
| **Lab 07** | Streams and Data Processing | `lab-07/` | ⏳ Upcoming |
| **Lab 08** | MongoDB and Node.js Integration | `lab-08/` | ⏳ Upcoming |
| **Lab 09** | MongoDB CRUD APIs and Query Operations | `lab-09/` | ⏳ Upcoming |
| **Lab 10** | Secure MongoDB APIs and Backend Integration | `lab-10/` | ⏳ Upcoming |

---

## 🚀 Lab 01: Node.js and Express Server

The implementation and documentation for **Lab 01** is located in the [`lab-01/`](./lab-01) directory.

### Quick Start (Lab 01):
```bash
cd lab-01
npm install
npm start
```

### Endpoints (Lab 01):
- `GET /` — Welcome text
- `GET /about` — JSON response with student details (`name`, `section`)
- `GET /time` — Current date and time using `new Date()`
- `404 Handler` — Catch-all for unknown paths

See the [Lab 01 README](./lab-01/README.md) for full documentation, notes, and output screenshots.

---

## 📋 Course Rules & Guidelines
- Never commit or share `.env` files.
- `node_modules` are excluded via `.gitignore`.
- Passwords are never stored or logged in plain text.
- Every route returns the appropriate HTTP status code.
- Parameterised queries are used for all database operations.
