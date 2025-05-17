Task Management System
A full-stack Task Management application featuring Google OAuth 2.0 authentication, designed for the Gamage Recruiters SE Intern Project (May 2025).

Features
Authentication: Secure login with Google OAuth 2.0.

CRUD Operations: Create, view, update, and delete tasks with fields including:

Title

Description

Deadline

Assigned To

Status

PDF Reports: Export task lists as PDF files using jsPDF.

Responsive UI: Modern, responsive styling using Tailwind CSS.

Git Workflow: Developed with feature branches and frequent commits, hosted on GitHub.

Tech Stack
Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

Authentication: Passport.js with Google OAuth 2.0 strategy

PDF Generation: jsPDF

Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone <repository-url>
cd task-management-system
2. Backend Setup
bash
Copy
Edit
cd backend
npm install
Copy .env.example to .env and fill in your credentials:

ini
Copy
Edit
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/taskDB
Start the backend server:

bash
Copy
Edit
node server.js
3. Frontend Setup
bash
Copy
Edit
cd ../frontend
npm install
If required, copy .env.example to .env and configure any frontend environment variables.

Start the frontend app:

bash
Copy
Edit
npm start
Access the App
Frontend: http://localhost:3000

Backend: http://localhost:5000

Usage
Sign in using your Google account on the login page.

View your task overview on the Dashboard.

Manage tasks: add, edit, delete, search, and sort them on the Tasks page.

Download your current task list as a PDF report.

GitHub Workflow
Work on feature branches (e.g., feature/task-management).

Commit frequently with clear, meaningful messages.

Merge feature branches into the main branch after review.

Submission
GitHub Repository: [<your-repo-url>](https://github.com/Dhanushanandan/task-manager)

Optional Live Demo: Hosted on platforms like Render or Vercel (remember to update API URLs in frontend accordingly).

Notes
Ensure your MongoDB Atlas cluster is properly configured with network access and correct connection URI.

Obtain Google OAuth 2.0 credentials from the Google Cloud Console and configure the .env files.

Thoroughly test all functionalities locally before submitting.

Keep credentials and sensitive info out of your repository.
