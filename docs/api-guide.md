# API Guide

## Base URL

```
http://localhost:3000/api
```

## Authentication

All protected endpoints require authentication via JWT token in the Authorization header:

```
Authorization: Bearer <token>
```

## Auth Endpoints

### Login

```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "id": "user-id",
    "email": "user@example.com",
    "fullName": "John Doe",
    "role": "STUDENT"
  }
}
```

### Register

```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "fullName": "John Doe",
  "role": "STUDENT"
}

Response: 201 Created
```

## Jobs Endpoints

### List Jobs

```
GET /jobs?page=1&limit=10&q=search_term

Response: 200 OK
{
  "success": true,
  "data": [...],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "pages": 10
  }
}
```

### Get Job Details

```
GET /jobs/:id

Response: 200 OK
{
  "success": true,
  "data": {
    "id": "job-id",
    "title": "Senior Developer",
    "company": "Tech Company",
    "description": "...",
    "salary": "$100k - $150k"
  }
}
```

### Apply for Job

```
POST /jobs/:id/apply
Authorization: Bearer <token>
Content-Type: application/json

{
  "coverLetter": "Why I'm interested..."
}

Response: 201 Created
```

## Error Responses

```json
{
  "success": false,
  "error": "Error message here"
}
```

### Common Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Server Error
