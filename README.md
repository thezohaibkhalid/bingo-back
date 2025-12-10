# Bingo Backend API

A RESTful API backend for a multiplayer Bingo game application built with Node.js, Express, and PostgreSQL.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [Authentication Routes](#authentication-routes)
  - [User Routes](#user-routes)
  - [Friends Routes](#friends-routes)
  - [Match Routes](#match-routes)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Response Format](#response-format)

## 🎯 Overview

This backend API powers a multiplayer Bingo game platform where users can:
- Register and authenticate with email/password and OTP verification
- Search for and add friends
- Create and manage Bingo matches
- Play real-time Bingo games with friends

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 5.2.1
- **Database**: PostgreSQL
- **ORM**: Prisma 7.1.0
- **Authentication**: Custom JWT-based session tokens
- **Email**: Nodemailer (for OTP verification)
- **Password Hashing**: bcryptjs

## 📦 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/thezohaibkhalid/bingo-back.git
cd bingo-back
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (see [Environment Variables](#environment-variables))

4. Set up the database (see [Database Setup](#database-setup))

5. Start the development server:
```bash
npm run dev
```

The server will run on `http://localhost:3000` by default.

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server
PORT=3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/bingo_db"

# Email Configuration (for OTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# CORS Origins (comma-separated)
CORS_ORIGINS=http://localhost:5173,http://localhost:3000
```

## 🗄 Database Setup

1. Create a PostgreSQL database:
```sql
CREATE DATABASE bingo_db;
```

2. Run Prisma migrations:
```bash
npx prisma migrate dev
```

3. (Optional) Generate Prisma Client:
```bash
npx prisma generate
```

## ▶️ Running the Application

### Development Mode
```bash
npm run dev
```
Uses nodemon for automatic server restarts on file changes.

### Production Mode
```bash
node src/index.js
```

## 📚 API Documentation

Base URL: `http://localhost:3000/api`

All authenticated routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <session_token>
```

---

### Authentication Routes

Base path: `/api/auth`

#### Register User
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123",
  "name": "John Doe"
}
```

**Response (201):**
```json
{
  "statusCode": 201,
  "success": true,
  "message": "User registered successfully",
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "John Doe"
  }
}
```

**Errors:**
- `400` - Email and password are required
- `400` - Email already in use

---

#### Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "OTP sent to email",
  "data": {
    "otpId": "otp_code_id"
  }
}
```

**Errors:**
- `400` - Email and password are required
- `401` - Invalid email or password

---

#### Verify OTP
```http
POST /api/auth/verify-otp
```

**Request Body:**
```json
{
  "otpId": "otp_code_id",
  "code": "123456"
}
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "session_token_here",
    "user": {
      "id": "user_id",
      "email": "user@example.com",
      "display_name": "John Doe",
      "avatar_url": null,
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

**Errors:**
- `400` - OTP ID and code are required
- `401` - Invalid or expired OTP

---

#### Get Current User
```http
GET /api/auth/me
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Session fetched successfully",
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "display_name": "John Doe",
    "avatar_url": null,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `401` - Unauthorized (invalid or missing token)

---

### User Routes

Base path: `/api/users`

#### Search Users
```http
GET /api/users/search?query=john
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Query Parameters:**
- `query` (string, optional) - Search term for name, displayName, or email

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    {
      "id": "user_id",
      "display_name": "John Doe",
      "avatar_url": null
    }
  ]
}
```

**Errors:**
- `401` - Unauthorized

---

#### Get My Profile
```http
GET /api/users/me
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Profile fetched successfully",
  "data": {
    "id": "user_id",
    "email": "user@example.com",
    "display_name": "John Doe",
    "avatar_url": null,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `401` - Unauthorized

---

### Friends Routes

Base path: `/api/friends`

#### Send Friend Request
```http
POST /api/friends/requests
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Request Body:**
```json
{
  "addressee_id": "target_user_id"
}
```

**Response (201):**
```json
{
  "statusCode": 201,
  "success": true,
  "message": "Friend request sent",
  "data": {
    "id": "friendship_id",
    "requester_id": "your_user_id",
    "addressee_id": "target_user_id",
    "status": "PENDING",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `400` - addressee_id is required
- `400` - Cannot send friend request to yourself
- `404` - User not found
- `400` - Friendship or friend request already exists
- `401` - Unauthorized

---

#### List Friend Requests
```http
GET /api/friends/requests
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Friend requests fetched successfully",
  "data": {
    "sent": [
      {
        "id": "friendship_id",
        "addressee": {
          "id": "user_id",
          "display_name": "John Doe",
          "avatar_url": null
        },
        "status": "PENDING",
        "created_at": "2024-01-01T00:00:00.000Z"
      }
    ],
    "received": [
      {
        "id": "friendship_id",
        "requester": {
          "id": "user_id",
          "display_name": "Jane Doe",
          "avatar_url": null
        },
        "status": "PENDING",
        "created_at": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

**Errors:**
- `401` - Unauthorized

---

#### Accept Friend Request
```http
POST /api/friends/requests/:id/accept
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Friend request accepted",
  "data": {
    "id": "friendship_id",
    "status": "ACCEPTED",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `404` - Friend request not found
- `403` - Not authorized to accept this request
- `400` - Friend request is not pending
- `401` - Unauthorized

---

#### Reject Friend Request
```http
POST /api/friends/requests/:id/reject
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Friend request rejected",
  "data": {
    "id": "friendship_id"
  }
}
```

**Errors:**
- `404` - Friend request not found
- `403` - Not authorized to reject this request
- `401` - Unauthorized

---

#### List Friends
```http
GET /api/friends
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Friends fetched successfully",
  "data": [
    {
      "id": "user_id",
      "display_name": "John Doe",
      "avatar_url": null,
      "friendship_id": "friendship_id",
      "friendship_created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

**Errors:**
- `401` - Unauthorized

---

### Match Routes

Base path: `/api/matches`

#### Invite to Match
```http
POST /api/matches/invite
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Request Body:**
```json
{
  "player2_id": "opponent_user_id"
}
```

**Response (201):**
```json
{
  "statusCode": 201,
  "success": true,
  "message": "Match invitation sent",
  "data": {
    "id": "match_id",
    "player1_id": "your_user_id",
    "player2_id": "opponent_user_id",
    "status": "INVITED",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `400` - player2_id is required
- `400` - Cannot invite yourself
- `404` - User not found
- `400` - Match already exists
- `401` - Unauthorized

---

#### List Matches
```http
GET /api/matches
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Matches fetched successfully",
  "data": [
    {
      "id": "match_id",
      "player1": {
        "id": "user_id",
        "display_name": "John Doe"
      },
      "player2": {
        "id": "user_id",
        "display_name": "Jane Doe"
      },
      "status": "IN_PROGRESS",
      "current_turn": "user_id",
      "winner_id": null,
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

**Errors:**
- `401` - Unauthorized

---

#### Get Match by ID
```http
GET /api/matches/:matchId
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Match fetched successfully",
  "data": {
    "id": "match_id",
    "player1": {
      "id": "user_id",
      "display_name": "John Doe"
    },
    "player2": {
      "id": "user_id",
      "display_name": "Jane Doe"
    },
    "status": "IN_PROGRESS",
    "current_turn": "user_id",
    "winner_id": null,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `404` - Match not found
- `403` - Not authorized to view this match
- `401` - Unauthorized

---

#### Accept Match Invitation
```http
POST /api/matches/:matchId/accept
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Match invitation accepted",
  "data": {
    "id": "match_id",
    "status": "BOARD_SETUP",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `404` - Match not found
- `403` - Not authorized to accept this match
- `400` - Match is not in INVITED status
- `401` - Unauthorized

---

#### Set Board
```http
POST /api/matches/:matchId/board
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Request Body:**
```json
{
  "numbers": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
}
```

**Note:** The `numbers` array must contain exactly 25 unique integers between 1 and 25.

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Board set successfully",
  "data": {
    "id": "board_id",
    "match_id": "match_id",
    "player_id": "user_id",
    "numbers": [1, 2, 3, ...],
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `404` - Match not found
- `403` - Not authorized to set board for this match
- `400` - Match is not in BOARD_SETUP status
- `400` - Board already set for this player
- `400` - Board validation errors
- `401` - Unauthorized

---

#### Get Match State
```http
GET /api/matches/:matchId/state
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Match state fetched successfully",
  "data": {
    "match": {
      "id": "match_id",
      "status": "IN_PROGRESS",
      "current_turn": "user_id",
      "winner_id": null
    },
    "your_board": {
      "id": "board_id",
      "numbers": [1, 2, 3, ...],
      "lines": 2
    },
    "opponent_board": {
      "id": "board_id",
      "numbers": [1, 2, 3, ...],
      "lines": 1
    },
    "moves": [5, 10, 15, 20],
    "is_your_turn": true
  }
}
```

**Errors:**
- `404` - Match not found
- `403` - Not authorized to view this match
- `401` - Unauthorized

---

#### Make Move
```http
POST /api/matches/:matchId/move
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Request Body:**
```json
{
  "number": 5
}
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Move made successfully",
  "data": {
    "id": "move_id",
    "match_id": "match_id",
    "number": 5,
    "player_id": "user_id",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `404` - Match not found
- `403` - Not authorized to make move in this match
- `400` - Match is not in IN_PROGRESS status
- `400` - Not your turn
- `400` - Number is required and must be between 1 and 25
- `400` - Number already selected
- `401` - Unauthorized

---

#### Claim Bingo
```http
POST /api/matches/:matchId/bingo
```

**Headers:**
```
Authorization: Bearer <session_token>
```

**Response (200):**
```json
{
  "statusCode": 200,
  "success": true,
  "message": "Bingo claimed successfully",
  "data": {
    "match_id": "match_id",
    "winner_id": "user_id",
    "status": "FINISHED",
    "updated_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Errors:**
- `404` - Match not found
- `403` - Not authorized to claim bingo in this match
- `400` - Match is not in IN_PROGRESS status
- `400` - You don't have a valid bingo (5 lines)
- `401` - Unauthorized

---

## 📁 Project Structure

```
bingo-back/
├── src/
│   ├── controllers/          # Route controllers
│   │   ├── auth.controllers.js
│   │   ├── user.controllers.js
│   │   ├── friends.contollers.js
│   │   └── match.controllers.js
│   ├── routes/               # Express routes
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── friends.routes.js
│   │   └── match.routes.js
│   ├── middleware/           # Express middleware
│   │   └── requireAuth.js
│   ├── utils/                # Utility functions
│   │   ├── asyncHandler.js
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   └── authUtils.js
│   ├── lib/                  # Library configurations
│   │   └── auth.js
│   ├── prismaClient.js       # Prisma client instance
│   └── index.js              # Application entry point
├── prisma/
│   └── schema.prisma         # Database schema
├── package.json
└── README.md
```

## 🔒 Authentication

The API uses a custom session-based authentication system:

1. **Registration/Login Flow:**
   - User registers with email and password
   - User logs in with email and password
   - System sends OTP code to user's email
   - User verifies OTP code
   - System returns a session token

2. **Session Token:**
   - Tokens are stored in the database (`Session` model)
   - Tokens have an expiration date
   - Include token in Authorization header: `Bearer <token>`

3. **Protected Routes:**
   - All routes except `/api/auth/register`, `/api/auth/login`, and `/api/auth/verify-otp` require authentication
   - Use the `requireAuth` middleware to protect routes

## ⚠️ Error Handling

All errors follow a consistent format:

```json
{
  "statusCode": 400,
  "success": false,
  "message": "Error message here",
  "errors": [],
  "data": null
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## 📤 Response Format

All successful responses follow this format:

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Success message",
  "data": { ... }
}
```

## 🎮 Game Rules

- Bingo boards are 5x5 grids (25 numbers total)
- Numbers range from 1 to 25
- Players take turns selecting numbers
- A player wins by completing 5 lines (rows, columns, or diagonals)
- Lines are automatically calculated based on selected numbers

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on the GitHub repository.

---

**Last Updated:** 2024
