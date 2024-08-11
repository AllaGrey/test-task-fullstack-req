# Client-Server Data Fetch Test Task

This project implements a client-server data fetch logic based on the given requirements. The client-side allows users to set a concurrency limit and a request rate, while the server handles the requests with random delays and rate-limiting logic.

## Requirements

### Client-Side

1. **Input and Button:**
   - Display an input field (required, type number, range 0 to 100).
   - Display a "Start" button.
   - Upon clicking the "Start" button:
     - The button becomes disabled.
     - The app starts sending 1000 asynchronous HTTP requests to the server's `/api` endpoint.
     - The input value sets the concurrency limit and the requests-per-second limit.
     - Each request sends an index (1, 2, 3, ...) to the server.

2. **Concurrency and Rate-Limiting:**
   - **Concurrency:** The input value determines the number of active requests in the network.
   - **Requests per Second:** The input value also sets the limit of requests sent per second.

3. **Rendering Responses:**
   - The client-side JavaScript renders the results of server responses (request indexes) in a list immediately after each response is received.

### Server-Side

1. **Request Handling:**
   - The server handles requests to the `/api` endpoint.

2. **Response Delay:**
   - Each request is processed with a random delay between 1ms and 1000ms before sending a response.

3. **Response Data:**
   - The response contains the index that was sent with the request.

4. **Rate Limiting:**
   - The server returns a `429 Too Many Requests` error if it receives more than 50 requests per second.

## Technology Stack

- **Client-Side:**
  - Vite
  - React
  - TypeScript
  - Styled Components
- **Server-Side:**
  - Node.js
  - Express
  - TypeScript

## Deployment

The project is deployed on Vercel.

- **Live Demo:** [test-task-fullstack-req-client.vercel.app](https://test-task-fullstack-req-client.vercel.app/)
