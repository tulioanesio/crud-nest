<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">A simple CRUD API for user management built with NestJS and Prisma using PostgreSQL.</p>

## Description

This is a first CRUD project designed as a learning exercise to start studying the NestJS framework, using Prisma ORM and PostgreSQL for data persistence.  
It also served as practice for implementing API documentation using Swagger and enhanced validation and schema typing through Scalar API Reference.

The API includes:

- Create, Read, Update, Delete (CRUD) operations for users
- Data validation with DTOs and Validation Pipes
- Swagger (OpenAPI) for interactive API documentation
- Scalar API Reference for enhanced validation and schema type safety

## Features

- **NestJS** for a modular and scalable architecture
- **Prisma** as the ORM to interact with a PostgreSQL database
- **DTOs** and **Pipes** to validate and transform incoming data
- **Swagger UI** available at `/docs` for endpoint documentation
- **Scalar** integration to improve schema validation (e.g., email, password)

## Installation

1. Clone the repository
2. Install dependencies
3. Set up a local PostgreSQL database and update the `.env` file

```bash
npm install
```

## Database Setup

Ensure you have a PostgreSQL instance running and update the .env file accordingly:
```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```
After that, generate the Prisma client and push the schema:
```
npx prisma generate
npx prisma db push
```
Running the Application
```
npm run start:dev
```
Visit the Swagger documentation at:
```
http://localhost:3000/docs
```
