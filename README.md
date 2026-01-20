# IndiChess - Chess Clone Application

A full-stack chess application built with a Spring Boot backend and React frontend.

## Project Structure

- `indichess_backend`: Spring Boot application handling game logic, user authentication (including Google OAuth), and database interactions.
- `indichess_frontend`: React application for the user interface, chessboard rendering, and game interaction.

## Features

- **User Authentication**: Sign up and login with email/password or Google (OAuth2).
- **Chess Game**: Play chess against other players (or local AI/engine if implemented).
- **Move Validation**: Legal move generation and validation.
- **Game Modes**: Supports different game modes (e.g., Rapid, Move-based Timer).

## Getting Started

### Prerequisites

- Java 17 or higher
- Node.js and npm
- MySQL Server

### Backend Setup

1. Navigate to the `indichess_backend` directory.
2. Create `src/main/resources/application.properties` from `src/main/resources/application.properties.template`.
3. Fill in your MySQL credentials and Google OAuth keys in `application.properties`.
4. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup

1. Navigate to the `indichess_frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Configuration

The `application.properties` file allows configuration of database connection and OAuth settings. **Do not commit your actual `application.properties` file to version control.** Use the provided template as a guide.
