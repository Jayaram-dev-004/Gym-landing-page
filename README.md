# GymFit+: Auth-Integrated Fitness Portal

## Overview
GymFit+ is a modern fitness web application that integrates user authentication with features like Google Authentication, database storage for user details, and a seamless login/signup experience.

## Features
- **User Authentication**: Secure user login and signup with JWT authentication.
- **Google Authentication**: Social login via Google.

- **Responsive UI**: Built with React and Material UI for a clean and modern look.
- **Protected Routes**: Secure pages that require authentication.
- **Hosted on GitHub Pages**: Deployment handled via GitHub Actions.

## Tech Stack
- **Frontend**: React, React Router, Axios, Material UI
- **Authentication**: JWT (JSON Web Token), Google OAuth
- **Hosting**: GitHub Pages (Frontend)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/GymFit.git
   cd GymFit
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Deployment
### Frontend (GitHub Pages)
1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy using GitHub Pages:
   ```bash
   npm run deploy
   ```

## API Endpoints
- **User Signup**: `POST /register`
- **User Login**: `POST /login`
- **Google OAuth Login**: `GET /auth/google`
- **Fetch User Details**: `GET /user`

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request.

