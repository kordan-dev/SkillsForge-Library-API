# SkillsForge-Library-API
a simple API for a books library

# Library Book Collection Application
This is a simple API for a Library Book Collection Application developed using Express.js and an in-memory database.

## Prerequisites
Node.js (version X.X.X or higher)
### Getting Started
1. Clone the repository:
``` git clone https://github.com/your-username/library-app.git```

2. Navigate to the project directory:
   ```cd nodeStuff```
   
3. Install dependencies:
   ```npm install```

## Usage
1. Start the server:
   ```node index.js```
   You should see a message indicating that the server is running, listening on a specific port (e.g., 3000).
2. Use cURL to test the API endpoints.
   - Create an author.
      ```curl -X POST -H "Content-Type: application/json" -d '{"name":"Taiwo Daniel"}' http://localhost:3000/authors```
   - Get all authors.
     ```curl http://localhost:3000/authors```
   - Create a book.
     ```curl -X POST -H "Content-Type: application/json" -d '{"title":"Book Title","authorId":1}' http://localhost:3000/books```
   - Get all books.
     ```curl http://localhost:3000/books```
   - Modify and test other endpoints as required based on your application's needs.
3. Stop the server by pressing Ctrl + C in the terminal.

# License
This project is licensed under the MIT License.
