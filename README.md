# CampusHub
CampusHub is a web application to help students manage campus life. It includes authentication, announcements, events, resources, and a timetable builder.

## Project Structure
This repo is a monorepo with separate frontend and backend apps:

- client/ - Vite frontend (HTML/CSS/JS)
- server/ - Express API server

## Features
- User registration (signup)
- User authentication (login)
- Events and announcements
- Timetable generator
- Resource management

## Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- Vite
- HTML/CSS/JavaScript
- Tailwind CSS

## Setup

### 1) Backend (server)
Create a server env file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
PORT=5000
```

Install and run the API:

```
cd server
npm install
npm start
```

### 2) Frontend (client)
Create a client env file:

```
VITE_API_URL=http://localhost:5000
```

Install and run the frontend:

```
cd client
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## Deployment Notes
- Deploy the server and client separately from this same repo.
- Update client env var `VITE_API_URL` to your deployed server URL.
- Configure server CORS to allow your deployed client origin.
