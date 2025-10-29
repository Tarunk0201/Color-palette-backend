<div align="center">

<!-- You can create a simple logo/banner and upload it to your repo to use here -->

<!-- <img src="httpslogo.png" alt="Color Palette Logo" width="200"/> -->

<h1 style="border-bottom: none;">
🎨 Color Palette Backend
</h1>

<p>
The complete backend server for a personal, cloud-based Color Palette Manager. Built with Node.js, Express, and MongoDB.
</p>

<!-- Badges -->

<p>
<img alt="Node.js" src="https://img.shields.io/badge/Node.js-18.x-brightgreen?logo=nodedotjs">
<img alt="Express" src="https://img.shields.io/badge/Express-4.x-blue">
<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb">
<img alt="License" src="https://img.shields.io/github/license/Tarunk0201/Color-palette-backend?color=blue">
<img alt="Repo Size" src="https://img.shields.io/github/repo-size/Tarunk0201/Color-palette-backend">
<img alt="Last Commit" src="https://img.shields.io/github/last-commit/Tarunk0201/Color-palette-backend">
</p>
</div>

This repository contains the complete backend solution for the Color Palette Manager, a web application for creating, storing, and managing personal color palettes in the cloud. It handles user authentication, data persistence, and provides a full RESTful API for all frontend operations.

This project is the perfect backend to power the Color Palette Frontend (You should link your frontend here!).

✨ Features

User Authentication: Secure user registration and login using JSON Web Tokens (JWT).

Password Hashing: Passwords are never stored in plain text, using bcrypt.js for strong hashing.

Full CRUD for Palettes: Users can create, read, update, and delete their own color palettes.

Cloud Persistence: Uses MongoDB Atlas to securely store user and palette data.

Protected Routes: Middleware ensures that users can only access and modify their own data.

Scalable Structure: Organized into a clean, maintainable structure (routes, controllers, models).

🔧 Tech Stack

Node.js: JavaScript runtime environment.

Express.js: Fast, unopinionated, minimalist web framework for Node.js.

MongoDB (Atlas): Cloud-hosted NoSQL database.

Mongoose: Elegant MongoDB object modeling for Node.js.

JSON Web Token (JWT): For handling secure user authentication.

Bcrypt.js: For hashing user passwords.

Dotenv: For managing environment variables.

CORS: For handling cross-origin resource sharing.

🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

Prerequisites

You will need the following installed on your machine:

Node.js (v16 or higher)

npm

Git

A free MongoDB Atlas account (or a local MongoDB server)

1. Clone the Repository

git clone [https://github.com/Tarunk0201/Color-palette-backend.git](https://github.com/Tarunk0201/Color-palette-backend.git)
cd Color-palette-backend


2. Install Dependencies

npm install


3. Set Up Environment Variables

Create a file named .env in the root of your project and add the following variables.

# Server Configuration
PORT=3001

# MongoDB Connection
# Get this from your MongoDB Atlas dashboard
MONGO_URI="your-mongodb-connection-string"

# JWT Secret
# Can be any long, random string
JWT_SECRET="YOUR_SUPER_SECRET_KEY_FOR_JWT"


Tip: A good JWT_SECRET can be generated from the command line:

node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

4. Run the Server

You can run the server in development mode (which restarts on file changes) or production mode.

Development:

npm run dev


Production:

npm start


Your server should now be running on http://localhost:3001.

📚 API Documentation

The API is structured around two main resources: Authentication and Palettes. All palette routes are protected and require a valid JWT token.

Authentication (/api/auth)

Method

Endpoint

Description

POST

/register

Creates a new user account. Expects email and password in the body.

POST

/login

Logs in a user. Expects email and password, returns a token and userId.

Palettes (/api/palettes)

(All routes are protected)

Method

Endpoint

Description

GET

/

Gets all palettes belonging to the authenticated user.

POST

/

Creates a new palette. Expects name (String) in the body.

DELETE

/:id

Deletes a specific palette by its id.

PUT

/:id/add-color

Adds a color to a palette. Expects color (String, e.g., "#FFFFFF") in the body.

PUT

/:id/remove-color

Removes a color from a palette. Expects color (String, e.g., "#FFFFFF") in the body.

📁 Project Structure

This repository uses a standard, scalable structure for an Express.js API.

/
├── config/
│   └── db.js         # MongoDB connection logic
├── controllers/
│   ├── authController.js   # Logic for user registration/login
│   └── paletteController.js # Logic for palette CRUD operations
├── middleware/
│   └── authMiddleware.js # JWT verification & user protection
├── models/
│   ├── User.js       # Mongoose User schema
│   └── Palette.js    # Mongoose Palette schema
├── routes/
│   ├── auth.js       # Routes for /api/auth
│   └── palettes.js   # Routes for /api/palettes
├── .env.example      # Example environment file
├── .gitignore
├── server.js         # Main server entry point
└── package.json


💡 Troubleshooting

MongooseServerSelectionError / Connection timed out

This is the most common error when connecting to MongoDB Atlas. It almost always means you have not whitelisted your IP address.

Fix:

Log in to your MongoDB Atlas dashboard.

Go to Network Access in the left sidebar.

Click "Add IP Address".

For development, click "ALLOW ACCESS FROM ANYWHERE" (IP: 0.0.0.0/0).

Click "Confirm" and wait for the status to become "Active".

Restart your Node.js server.

🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, please open an issue or submit a pull request.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

👤 Author

Tarun

GitHub: @Tarunk0201

LinkedIn: [Tarun Kumar Singh](https://www.linkedin.com/in/tarun-kumar-singh-b939972a2/)

📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
