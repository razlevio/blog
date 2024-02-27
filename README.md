## Blog Application API Documentation

### Base URL

The base URL for all endpoints is `/api/posts`.

### Endpoints

#### 1. List All Blog Posts

- **Endpoint**: `GET /api/posts`
- **Description**: Retrieves a list of all blog posts.
- **Authentication Required**: No (assuming public access)
- **Request Parameters**: None
- **Request Body**: None
- **Response**: A JSON array of blog posts.
- **Status Codes**:
  - `200 OK`: Successfully retrieved the list of posts.

#### 2. Create a New Post

- **Endpoint**: `POST /api/posts`
- **Description**: Creates a new blog post.
- **Authentication Required**: Yes (assumed based on the presence of `userId`)
- **Request Body**:
  - `userId`: The ID of the user creating the post.
  - `title`: The title of the post.
  - `content`: The content of the post.
- **Response**: Confirmation message with created post details.
- **Status Codes**:
  - `201 Created`: Successfully created a new post.
  - `400 Bad Request`: Missing required fields (`userId`, `title`, or `content`).
  - `500 Internal Server Error`: Failed to create the post.

#### 3. Retrieve a Single Post

- **Endpoint**: `GET /api/posts/{id}`
- **Description**: Retrieves a single blog post by its unique ID.
- **Authentication Required**: No (assuming public access)
- **Request Parameters**:
  - `id`: The unique identifier of the blog post.
- **Request Body**: None
- **Response**: A JSON object representing the blog post.
- **Status Codes**:
  - `200 OK`: Successfully retrieved the post.
  - `404 Not Found`: No post found with the provided ID.

#### 4. Update an Existing Post

- **Endpoint**: `PUT /api/posts/{id}`
- **Description**: Updates an existing blog post by its ID.
- **Authentication Required**: Yes (assumed since updating content)
- **Request Parameters**:
  - `id`: The unique identifier of the blog post to update.
- **Request Body**:
  - `title` (optional): The new title for the post.
  - `content` (optional): The new content for the post.
- **Response**: Confirmation message with updated post details.
- **Status Codes**:
  - `200 OK`: Successfully updated the post.
  - `400 Bad Request`: Missing required fields.
  - `404 Not Found`: No post found with the provided ID or update failed.
  - `500 Internal Server Error`: Failed to update the post.

#### 5. Delete a Post

- **Endpoint**: `DELETE /api/posts/{id}`
- **Description**: Deletes a post by its ID.
- **Authentication Required**: Yes (assumed since deleting content)
- **Request Parameters**:
  - `id`: The unique identifier of the blog post to delete.
- **Request Body**: None
- **Response**: Confirmation message of deletion.
- **Status Codes**:
  - `200 OK`: Successfully deleted the post.
  - `404 Not Found`: No post found with the provided ID or delete failed.

### Usage

This projects is for the job assignemnt, so I pre populated a database with 3 Blog posts and deployed the database to cloud provider, I also deployed the actual API app to vercel so you can test it live (for testing POST/PUT requests you need to use curl or postman to mimck the requests)

- http://localhost:3000/api/posts -> **GET** all posts
- http://localhost:3000/api/posts -> **POST** to add a new post, need to pass
  `{ "userId": "user_2cup8PaqPToR58vGWwGghXr5noa", "title": "blog title", "content": "blog content" }`
  I included here the pre populated user id for easy testing.
- http://localhost:3000/api/posts/clt39eg890001m7d8r4phcvtu -> **GET** specific post by the id
- http://localhost:3000/api/posts/clt39eg890001m7d8r4phcvtu -> **PUT** update a specific post by its id, need to pass
  `{ "title": "updated title", "content": "updated content" }`
  you don't have to pass both of them since you can update only title or only content
- http://localhost:3000/api/posts/clt39eg890001m7d8r4phcvtu -> **DELETE** specific post by its id

### Authentication and Authorization

- **Authentication**: Required for creating, updating, and deleting posts. This could be implemented via API keys, OAuth tokens, or session-based authentication, depending on the application's needs.
- **Authorization**: Ensure that users can only update or delete their own posts unless they have administrative privileges.

### Notes

- The actual implementation of authentication/authorization is not covered in this documentation and implmenetation and should be designed according to your application's security requirements.
- Always validate request inputs to ensure data integrity and security.
- Implementing rate limiting and other security measures to protect the API.
