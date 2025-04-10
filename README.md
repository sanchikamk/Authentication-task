# Bearer Token Authentication and Authorization

This is a Node.js application implementing user authentication and authorization using Bearer tokens, following the MVC pattern.

## Tech Stack

-   Node.js
-   Express.js
-   Mongoose (MongoDB)
-   JWT



## API Endpoints

### Register User

-   **Endpoint:** `POST..api /user/register`
-   **Request Body:**

    ```json
    {
      "username": "sanchika"

      "email": "sanch@example.com",
      "password": "123456"
    }
    ```

-   **Response:**

    ```json
    {
      "message": "User registered successfully."
    }
    ```

### Login User

-   **Endpoint:** `POST..api /auth/login`
-   **Request Body:**

    ```json
    {
      "username": "sanch@example.com",
      "password": "123456"
    }
    ```

-   **Response:**

    ```json
    {
      "token": "secret"
    }
    ```

### Get User Info

-   **Endpoint:** `api /auth/user/:id`
-   **Headers:** Authorization: Bearer.
-   `
-   **Response:**

    json
    {"_id":{"$oid":"67f7b47e1504dbd7e8c7d94c"},
    "name":"Sanchika",
    "email":"sanch@example.com",
    "password":"$2b$10$CVso4jIpZIrpCzWozHHbYOFjaU5D9pbwiRlv5EXHMgDC/6XfqyfZW",
    "createdAt":{"$date":{"$numberLong":"1744286847005"}},
    "updatedAt":{"$date":{"$numberLong":"1744286847005"}},
    "__v":{"$numberInt":"0"}}
    
   <img width="1277" alt="Screenshot 2025-04-10 at 5 47 50 PM" src="https://github.com/user-attachments/assets/9c5fb3d0-87da-4210-b8d9-a9ecdefba39d" />

