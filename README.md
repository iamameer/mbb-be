# mbb-be

MBB BE is the backend for MBB Library project created using NodeJS, Express, and Typescript.

*note: .env included, as for reference only

## Pre-requisites

- Node.js v14 or higher
- npm v6 or higher
- TypeScript v4 or higher

## Installation

1. Clone the repository
   ```bash
   git clone <repository_url>
   ```

2. Navigate into the project directory
   ```bash
   cd mbb-be
   ```

3. Install dependencies
   ```bash
   npm install
   ```

4. Start the server
   ```bash
   npm run dev
   ```

## Endpoints

- `GET /` - Fetch all books
- `GET /:id` - Fetch a book by ID
- `POST /` - Create a new book
- `PATCH /:id` - Update a book by ID
- `DELETE /:id` - Delete a book by ID
- `GET /reset` - Reset books data to default

## Development

For local development, you can run the server with:
```bash
npm run dev
```
This will start the server with live reloads for any changes made to the backend code.

