# API Smart Business

A RESTful API built with Express.js that provides mock data for external frontend applications. This API serves as a backend service for testing and development purposes.

## Overview

This API generates and serves fake data for three main resources: products, vehicles, and persons. It's designed to work seamlessly with external frontend applications through CORS-enabled endpoints.

## Features

- **CORS Enabled**: Configured to accept requests from external frontend applications
- **Mock Data Generation**: Uses Faker.js to generate realistic test data
- **RESTful Endpoints**: Simple GET endpoints returning JSON responses
- **Express.js**: Lightweight and fast Node.js framework

## API Endpoints

### Base URL
```
http://localhost:8000
```

### Available Routes

- `GET /` - Returns available API routes
- `GET /api/products` - Returns a list of products (5 items)
- `GET /api/vehicles` - Returns a list of vehicles (5 items)
- `GET /api/persons` - Returns a list of persons (5 items)

### Response Format

All endpoints return data in the following JSON structure:

```json
{
  "ok": true,
  "data": [...]
}
```

## Frontend Integration

This API is designed to be consumed by external frontend applications. To integrate:

1. **Configure CORS**: The API already has CORS enabled, so no additional configuration is needed
2. **Make HTTP Requests**: Use fetch, axios, or any HTTP client to consume the endpoints
3. **Base URL**: Point your frontend requests to `http://localhost:8000`

### Example Frontend Request

```javascript
fetch('http://localhost:8000/api/products')
  .then(response => response.json())
  .then(data => {
    console.log(data.data); // Array of products
  });
```

## Installation

```bash
cd backend
npm install
```

## Running the Server

```bash
npm run dev
```

The server will start on port 8000.

## Technologies

- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing middleware
- **Faker.js** - Data generation library
- **EJS** - Template engine (configured but not actively used)

## Data Structure

- **Products**: id, name, description, price, category, image
- **Vehicles**: id, brand, description, model, price, image
- **Persons**: id, name, email, phone, address, image
