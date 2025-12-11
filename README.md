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
- [WebSocket Events](#websocket-events)

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

### Quick Reference

**Authentication:**

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login (sends OTP to email)
- `POST /api/auth/verify-otp` - Verify OTP and get session token
- `GET /api/auth/me` - Get current user session (protected)

**Users:**

- `GET /api/users/search` - Search users by username (protected)
- `GET /api/users/me` - Get current user profile (protected)
- `GET /api/users/username-available` - Check username availability (public)

**Friends:**

- `POST /api/friends/requests` - Send friend request (protected)
- `GET /api/friends/requests` - List friend requests (protected)
- `POST /api/friends/requests/:id/accept` - Accept friend request (protected)
- `POST /api/friends/requests/:id/reject` - Reject friend request (protected)
- `GET /api/friends` - List all friends (protected)

**Matches:**

- `POST /api/matches/invite` - Invite friend to match (protected)
- `GET /api/matches` - List all matches (protected)
- `GET /api/matches/active-with/:friendId` - Check active match with a friend (protected)
- `GET /api/matches/:matchId` - Get match details (protected)
- `POST /api/matches/:matchId/accept` - Accept match invitation (protected)
- `POST /api/matches/:matchId/board` - Set board for match (protected)
- `GET /api/matches/:matchId/state` - Get match state (protected)
- `POST /api/matches/:matchId/move` - Make a move (protected)
- `POST /api/matches/:matchId/bingo` - Claim bingo (protected)

### CORS Configuration

The API is configured to accept requests from:

- `http://localhost:5173` (default Vite dev server)
- `http://localhost:3000`

Credentials are enabled for CORS requests. Make sure to include credentials in your frontend requests if needed.

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
  "username": "johndoe",
  "displayName": "John Doe"
}
```

**Field Requirements:**

- `email` (string, required) - Valid email address
- `password` (string, required) - User password
- `username` (string, required) - 3-30 characters: lowercase letters, numbers, '.', '\_' with no spaces
- `displayName` (string, optional) - Display name (defaults to username if not provided)

**Success Response (201):**

```json
{
  "success": true,
  "message": "User registered",
  "data": {
    "id": "clx1234567890",
    "email": "user@example.com",
    "username": "johndoe",
    "display_name": "John Doe"
  }
}
```

**Error Responses:**

- `400` - "Email, password and username are required"
- `400` - "Invalid username. Use 3-30 characters: lowercase letters, numbers, '.', '\_' with no spaces"
- `400` - "Email already in use"
- `400` - "Username already in use"

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

**Field Requirements:**

- `email` (string, required) - User email
- `password` (string, required) - User password

**Success Response (200):**

```json
{
  "success": true,
  "message": "OTP sent to email",
  "data": {
    "otpId": "clx1234567890"
  }
}
```

**Note:** An OTP code is sent to the user's email. The OTP expires in 5 minutes.

**Error Responses:**

- `400` - "Email and password are required"
- `401` - "Invalid credentials"

---

#### Verify OTP

```http
POST /api/auth/verify-otp
```

**Request Body:**

```json
{
  "otpId": "clx1234567890",
  "code": "123456"
}
```

**Field Requirements:**

- `otpId` (string, required) - OTP ID received from login endpoint
- `code` (string, required) - 6-digit OTP code from email

**Success Response (200):**

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "session_token_here_abc123xyz",
    "user": {
      "id": "clx1234567890",
      "email": "user@example.com",
      "username": "johndoe",
      "display_name": "John Doe",
      "avatar_url": null,
      "created_at": "2024-01-01T00:00:00.000Z"
    }
  }
}
```

**Error Responses:**

- `400` - "otpId and code are required"
- `400` - "Invalid OTP"
- `400` - "OTP already used"
- `400` - "OTP expired"
- `400` - "Invalid OTP code"

---

#### Get Current User (Session)

```http
GET /api/auth/me
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Session fetched successfully",
  "data": {
    "id": "clx1234567890",
    "email": "user@example.com",
    "username": "johndoe",
    "display_name": "John Doe",
    "avatar_url": null,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Responses:**

- `401` - "Unauthorized" (invalid or missing token)

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

- `query` or `q` (string, optional) - Search term for username (case-insensitive prefix match)

**Success Response (200):**

```json
{
  "success": true,
  "message": "Users fetched successfully",
  "data": [
    {
      "id": "clx1234567890",
      "username": "johndoe",
      "display_name": "John Doe",
      "avatar_url": null
    }
  ]
}
```

**Note:** Returns up to 25 users matching the query. Returns empty array if query is empty. Excludes current user from results.

**Error Responses:**

- `401` - "Unauthorized"

---

#### Get My Profile

```http
GET /api/users/me
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Profile fetched successfully",
  "data": {
    "id": "clx1234567890",
    "email": "user@example.com",
    "username": "johndoe",
    "display_name": "John Doe",
    "avatar_url": null,
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Responses:**

- `401` - "Unauthorized"

---

#### Check Username Availability

```http
GET /api/users/username-available?username=johndoe
```

**Query Parameters:**

- `username` or `name` (string, required) - Username to check

**Success Response (200):**

```json
{
  "success": true,
  "message": "Username availability checked",
  "data": {
    "username": "johndoe",
    "available": true
  }
}
```

**Error Responses:**

- `400` - "username is required"
- `400` - "Invalid username. Use 3-30 characters: lowercase letters, numbers, '.', '\_' with no spaces"

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
  "addressee_id": "clx9876543210"
}
```

**Field Requirements:**

- `addressee_id` (string, required) - ID of the user to send friend request to

**Success Response (201):**

```json
{
  "success": true,
  "message": "Friend request sent successfully",
  "data": {
    "id": "clx111222333",
    "requesterId": "clx1234567890",
    "addresseeId": "clx9876543210",
    "status": "PENDING",
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Responses:**

- `400` - "addressee_id is required"
- `400` - "Cannot send friend request to yourself"
- `404` - "User not found"
- `400` - "Friendship or friend request already exists"
- `401` - "Unauthorized"

---

#### List Friend Requests

```http
GET /api/friends/requests
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Friend requests fetched",
  "data": {
    "incoming": [
      {
        "id": "clx111222333",
        "requester_id": "clx9876543210",
        "requester_name": "Jane Doe",
        "created_at": "2024-01-01T00:00:00.000Z"
      }
    ],
    "outgoing": [
      {
        "id": "clx444555666",
        "addressee_id": "clx999888777",
        "addressee_name": "Bob Smith",
        "created_at": "2024-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

**Error Responses:**

- `401` - "Unauthorized"

---

#### Accept Friend Request

```http
POST /api/friends/requests/:id/accept
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**URL Parameters:**

- `id` (string, required) - Friend request ID

**Success Response (200):**

```json
{
  "success": true,
  "message": "Friend request accepted",
  "data": {
    "success": true
  }
}
```

**Error Responses:**

- `404` - "Friend request not found"
- `403` - "You are not allowed to accept this request"
- `400` - "Request is not pending"
- `401` - "Unauthorized"

---

#### Reject Friend Request

```http
POST /api/friends/requests/:id/reject
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**URL Parameters:**

- `id` (string, required) - Friend request ID

**Success Response (200):**

```json
{
  "success": true,
  "message": "Friend request rejected",
  "data": {
    "success": true
  }
}
```

**Note:** Rejecting a friend request deletes it from the database.

**Error Responses:**

- `404` - "Friend request not found"
- `403` - "You are not allowed to reject this request"
- `400` - "Request is not pending"
- `401` - "Unauthorized"

---

#### List Friends

```http
GET /api/friends
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Friends fetched successfully",
  "data": [
    {
      "id": "clx9876543210",
      "display_name": "Jane Doe",
      "avatar_url": null,
      "last_online_at": "2024-01-01T12:00:00.000Z"
    }
  ]
}
```

**Error Responses:**

- `401` - "Unauthorized"

---

### Match Routes

Base path: `/api/matches`

#### Invite Friend to Match

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
  "friend_id": "clx9876543210"
}
```

**Field Requirements:**

- `friend_id` (string, required) - ID of the friend to invite (must be an accepted friend)

**Success Response (201):**

```json
{
  "success": true,
  "message": "Match invitation created",
  "data": {
    "id": "clx555666777",
    "player1Id": "clx1234567890",
    "player2Id": "clx9876543210",
    "status": "INVITED",
    "currentTurnUserId": null,
    "winnerUserId": null,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "startedAt": null,
    "endedAt": null
  }
}
```

**Error Responses:**

- `400` - "friend_id is required"
- `400` - "Cannot invite yourself"
- `400` - "You can only invite accepted friends"
- `401` - "Unauthorized"

---

#### List Matches

```http
GET /api/matches
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**Success Response (200):**

```json
{
  "success": true,
  "message": "Matches fetched successfully",
  "data": [
    {
      "id": "clx555666777",
      "player1Id": "clx1234567890",
      "player2Id": "clx9876543210",
      "status": "IN_PROGRESS",
      "currentTurnUserId": "clx1234567890",
      "winnerUserId": null,
      "createdAt": "2024-01-01T00:00:00.000Z",
      "startedAt": "2024-01-01T00:05:00.000Z",
      "endedAt": null
    }
  ]
}
```

**Note:** Returns all matches where the user is either player1 or player2, ordered by creation date (newest first).

**Error Responses:**

- `401` - "Unauthorized"

---

#### Get Active Match with Friend

```http
GET /api/matches/active-with/:friendId
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**URL Parameters:**

- `friendId` (string, required) - ID of the friend to check against

**Success Responses (200):**

- When an active match exists:

```json
{
  "success": true,
  "message": "Active match found",
  "data": {
    "hasActiveMatch": true,
    "matchId": "clx555666777"
  }
}
```

- When no active match exists:

```json
{
  "success": true,
  "message": "No active match",
  "data": {
    "hasActiveMatch": false
  }
}
```

**Notes:**

- A match is considered active if its status is `INVITED`, `BOARD_SETUP`, or `IN_PROGRESS`.

**Error Responses:**

- `401` - "Unauthorized"

---

#### Get Match by ID

```http
GET /api/matches/:matchId
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**URL Parameters:**

- `matchId` (string, required) - Match ID

**Success Response (200):**

```json
{
  "success": true,
  "message": "Match fetched",
  "data": {
    "id": "clx555666777",
    "status": "IN_PROGRESS",
    "current_turn_user_id": "clx1234567890",
    "winner_user_id": null,
    "player1": {
      "id": "clx1234567890",
      "display_name": "John Doe"
    },
    "player2": {
      "id": "clx9876543210",
      "display_name": "Jane Doe"
    },
    "created_at": "2024-01-01T00:00:00.000Z",
    "started_at": "2024-01-01T00:05:00.000Z",
    "ended_at": null
  }
}
```

**Match Status Values:**

- `INVITED` - Match invitation sent, waiting for acceptance
- `BOARD_SETUP` - Match accepted, players setting up boards
- `IN_PROGRESS` - Game in progress
- `FINISHED` - Game completed
- `CANCELLED` - Match cancelled

**Error Responses:**

- `404` - "Match not found"
- `403` - "You are not part of this match"
- `401` - "Unauthorized"

---

#### Accept Match Invitation

```http
POST /api/matches/:matchId/accept
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**URL Parameters:**

- `matchId` (string, required) - Match ID

**Success Response (200):**

```json
{
  "success": true,
  "message": "Match invitation accepted",
  "data": {
    "id": "clx555666777",
    "player1Id": "clx1234567890",
    "player2Id": "clx9876543210",
    "status": "BOARD_SETUP",
    "currentTurnUserId": null,
    "winnerUserId": null,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "startedAt": null,
    "endedAt": null
  }
}
```

**Error Responses:**

- `404` - "Match not found"
- `403` - "Only invitee can accept the match"
- `400` - "Match is not in invited state"
- `401` - "Unauthorized"

---

#### Set Board

```http
POST /api/matches/:matchId/board
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**URL Parameters:**

- `matchId` (string, required) - Match ID

**Request Body:**

```json
{
  "mode": "straight",
  "numbers": [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25
  ]
}
```

**Field Requirements:**

- `mode` (string, optional) - If set to `"straight"`, generates a board with numbers 1-25 in order. Otherwise, use `numbers` array.
- `numbers` (array, required if mode is not "straight") - Array of exactly 25 unique integers between 1 and 25

**Success Response (201):**

```json
{
  "success": true,
  "message": "Board set successfully",
  "data": {
    "board": {
      "id": "clx888999000",
      "matchId": "clx555666777",
      "userId": "clx1234567890",
      "numbers": [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25
      ],
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "match": {
      "id": "clx555666777",
      "status": "IN_PROGRESS",
      "currentTurnUserId": "clx1234567890",
      "startedAt": "2024-01-01T00:05:00.000Z"
    }
  }
}
```

**Note:** When both players have set their boards, the match automatically transitions to `IN_PROGRESS` status and a random player is chosen to start.

**Error Responses:**

- `404` - "Match not found"
- `403` - "You are not part of this match"
- `400` - "Cannot set board in current match state"
- `400` - "numbers array is required (or use mode='straight')"
- `400` - "Board must have exactly 25 numbers"
- `400` - "Board numbers must be integers between 1 and 25"
- `400` - "Board numbers must be unique"
- `401` - "Unauthorized"

---

#### Get Match State

```http
GET /api/matches/:matchId/state
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**URL Parameters:**

- `matchId` (string, required) - Match ID

**Success Response (200):**

```json
{
  "success": true,
  "message": "Match state fetched",
  "data": {
    "match": {
      "id": "clx555666777",
      "status": "IN_PROGRESS",
      "current_turn_user_id": "clx1234567890",
      "winner_user_id": null
    },
    "players": [
      {
        "id": "clx1234567890",
        "display_name": "John Doe"
      },
      {
        "id": "clx9876543210",
        "display_name": "Jane Doe"
      }
    ],
    "your_board": {
      "numbers": [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25
      ],
      "size": 5
    },
    "moves": [
      {
        "move_number": 1,
        "number": 5,
        "chosen_by_user_id": "clx1234567890"
      },
      {
        "move_number": 2,
        "number": 10,
        "chosen_by_user_id": "clx9876543210"
      }
    ],
    "your_lines": 2,
    "opponent_lines": 1
  }
}
```

**Note:**

- `your_board` will be `null` if you haven't set a board yet
- `your_lines` and `opponent_lines` are automatically calculated based on completed rows, columns, and diagonals
- Lines are calculated for: 5 rows, 5 columns, 2 diagonals (total 12 possible lines)

**Error Responses:**

- `404` - "Match not found"
- `403` - "You are not part of this match"
- `401` - "Unauthorized"

---

#### Make Move

```http
POST /api/matches/:matchId/move
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**URL Parameters:**

- `matchId` (string, required) - Match ID

**Request Body:**

```json
{
  "number": 5
}
```

**Field Requirements:**

- `number` (number, required) - Integer between 1 and 25

**Success Response (200):**

```json
{
  "success": true,
  "message": "Move recorded",
  "data": {
    "success": true,
    "move": {
      "move_number": 1,
      "number": 5,
      "chosen_by_user_id": "clx1234567890"
    },
    "your_lines": 2,
    "opponent_lines": 1,
    "next_turn_user_id": "clx9876543210"
  }
}
```

**Error Responses:**

- `400` - "number is required and must be numeric"
- `400` - "number must be between 1 and 25"
- `404` - "Match not found"
- `403` - "You are not part of this match"
- `400` - "Match is not in progress"
- `400` - "It is not your turn"
- `400` - "Number already selected in this match"
- `401` - "Unauthorized"

---

#### Claim Bingo

```http
POST /api/matches/:matchId/bingo
```

**Headers:**

```
Authorization: Bearer <session_token>
```

**URL Parameters:**

- `matchId` (string, required) - Match ID

**Success Response (200) - Valid Bingo:**

```json
{
  "success": true,
  "message": "Bingo! You won the match",
  "data": {
    "success": true,
    "lines": 5,
    "is_winner": true
  }
}
```

**Success Response (200) - Invalid Claim:**

```json
{
  "success": true,
  "message": "Bingo claim rejected",
  "data": {
    "success": false,
    "lines": 3,
    "is_winner": false,
    "reason": "Not enough lines"
  }
}
```

**Success Response (200) - Match Already Finished:**

```json
{
  "success": true,
  "message": "Bingo claim checked",
  "data": {
    "success": false,
    "lines": null,
    "is_winner": false,
    "reason": "Match already has a winner"
  }
}
```

**Note:** A player needs 5 or more completed lines (rows, columns, or diagonals) to win. The match status changes to `FINISHED` and `winnerUserId` is set when a valid bingo is claimed.

**Error Responses:**

- `404` - "Match not found"
- `403` - "You are not part of this match"
- `400` - "Match is not in progress"
- `400` - "You do not have a board set up"
- `401` - "Unauthorized"

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

The API uses a custom session-based authentication system with OTP (One-Time Password) verification:

### Authentication Flow

1. **Registration:**

   - User provides email, password, and username
   - Username is validated and normalized (lowercase, 3-30 chars)
   - User is created in the database
   - No authentication token is returned (user must login)

2. **Login Flow:**

   - User provides email and password
   - If credentials are valid, an OTP code is generated and sent to user's email
   - OTP expires in 5 minutes
   - Response includes `otpId` which must be used in the next step

3. **OTP Verification:**

   - User provides `otpId` and the OTP code from email
   - If valid, a session token is generated and returned
   - Session token expires in 7 days
   - User data is included in the response

4. **Using Session Token:**
   - Include token in `Authorization` header: `Bearer <token>`
   - Token is validated on each authenticated request
   - Use `/api/auth/me` to verify token and get current user

### Session Token Details

- **Format:** Random string token stored in database
- **Expiration:** 7 days from creation
- **Storage:** Tokens are stored in the `sessions` table
- **Validation:** Token is checked against database on each request

### Protected Routes

**Public Routes (No Authentication Required):**

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/verify-otp`
- `GET /api/users/username-available`

**Protected Routes (Authentication Required):**

- All other routes require `Authorization: Bearer <token>` header
- Invalid or missing token returns `401 Unauthorized`

## 👤 Username Validation

Usernames must follow these rules:

- **Length:** 3-30 characters
- **Characters:** Lowercase letters (a-z), numbers (0-9), dots (.), underscores (\_)
- **No spaces:** Spaces are not allowed
- **Case:** Automatically converted to lowercase
- **Uniqueness:** Each username must be unique across all users

**Valid Examples:**

- `johndoe`
- `john_doe`
- `john.doe`
- `john123`
- `j.doe_123`

**Invalid Examples:**

- `John Doe` (contains space and uppercase)
- `ab` (too short, less than 3 characters)
- `john@doe` (contains invalid character @)
- `john-doe` (contains invalid character -)

**Username Normalization:**

- All usernames are automatically converted to lowercase
- Leading/trailing whitespace is trimmed
- Use the `/api/users/username-available` endpoint to check availability before registration

## ⚠️ Error Handling

All errors follow a consistent format:

```json
{
  "success": false,
  "message": "Error message here",
  "errors": [],
  "data": null,
  "statusCode": 400
}
```

**Error Response Fields:**

- `success` (boolean) - Always `false` for errors
- `message` (string) - Human-readable error message
- `errors` (array) - Array of detailed error objects (usually empty)
- `data` (null) - Always `null` for errors
- `statusCode` (number) - HTTP status code
- `stack` (string, optional) - Stack trace (only in development mode)

**Common HTTP Status Codes:**

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation errors, invalid input)
- `401` - Unauthorized (missing or invalid authentication token)
- `403` - Forbidden (authenticated but not authorized for this action)
- `404` - Not Found (resource doesn't exist)
- `500` - Internal Server Error

**Example Error Response:**

```json
{
  "success": false,
  "message": "Email already in use",
  "errors": [],
  "data": null,
  "statusCode": 400
}
```

## 📤 Response Format

All successful responses follow this format:

```json
{
  "success": true,
  "message": "Success message",
  "data": { ... }
}
```

**Success Response Fields:**

- `success` (boolean) - Always `true` for successful responses
- `message` (string) - Human-readable success message
- `data` (object | array | null) - Response payload

**Note:** The `statusCode` is not included in the JSON response body, but is set in the HTTP response headers.

## 🔌 WebSocket Events

- **Endpoint:** `ws://localhost:3000/ws?token=<session_token>`
- **Auth:** `token` query param must be a valid, unexpired session token (from `/api/auth/verify-otp`); the connection is closed if missing/invalid.
- **Format:** Messages are server-to-client JSON objects shaped as `{ "event": "<event_name>", "payload": { ... } }`.
- **Connections:** Multiple sockets per user are supported; a message is fanned out to all active sockets for that user.
- **Client messages:** The server currently only emits events; no client-side messages are required.

**Events & Payloads**

- `friend_request` — when you receive a friend request.
  - Payload: `{ "requestId": "<id>", "fromUserId": "<user_id>" }`
- `match_invite` — when a friend invites you to a match.
  - Payload: `{ "matchId": "<id>", "fromUserId": "<user_id>" }`
- `match_accepted` — when the invitee accepts your match.
  - Payload: `{ "matchId": "<id>", "byUserId": "<user_id>" }`
- `board_setup_complete` — when both boards are present and the match is in progress.
  - Payload: `{ "matchId": "<id>", "startingUserId": "<user_id>" }`
- `opponent_move` — when your opponent selects a number.
  - Payload: `{ "matchId": "<id>", "move_number": <int>, "number": <int>, "fromUserId": "<user_id>" }`
- `your_turn` — when it is your turn to play.
  - Payload: `{ "matchId": "<id>" }`
- `match_finished` — when a match concludes.
  - Payload: `{ "matchId": "<id>", "winnerUserId": "<user_id>" }`

## 🎮 Game Rules

### Board Setup

- Bingo boards are 5x5 grids (25 numbers total)
- Numbers range from 1 to 25
- Each number must be unique on a board
- Boards can be set manually (custom arrangement) or automatically (straight 1-25)

### Gameplay

- Players take turns selecting numbers (1-25)
- Each number can only be selected once per match
- The turn alternates between players after each move
- A random player is chosen to start when both boards are set

### Winning

- A player wins by completing **5 or more lines**
- Lines can be:
  - **Rows:** 5 horizontal lines (top to bottom)
  - **Columns:** 5 vertical lines (left to right)
  - **Diagonals:** 2 diagonal lines (top-left to bottom-right, top-right to bottom-left)
- Total possible lines: 12 (5 rows + 5 columns + 2 diagonals)
- Lines are automatically calculated based on selected numbers
- Player must claim bingo by calling the `/api/matches/:matchId/bingo` endpoint
- Match status changes to `FINISHED` when a valid bingo is claimed

### Match States

1. **INVITED** - Match invitation sent, waiting for player2 to accept
2. **BOARD_SETUP** - Match accepted, both players setting up their boards
3. **IN_PROGRESS** - Both boards set, game in progress
4. **FINISHED** - Game completed, winner determined
5. **CANCELLED** - Match cancelled (not currently implemented)

## 📝 License

ISC

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please open an issue on the GitHub repository.

---

**Last Updated:** 2025 Dec 11
