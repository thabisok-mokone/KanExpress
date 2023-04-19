// // First, the code imports two modules: express and axios. express is a popular web application framework for Node.js, while axios is a library for making HTTP requests.

// import express from "express";
// import axios from "axios";

// // The code creates an instance of the express application using the express() function and assigns it to the app variable.

// const app = express();
// export default app;

// // Then, the code sets up a route handler for the root URL (/) using the app.get() method. This method takes two arguments: the URL to match (in this case, the root URL) and a callback function to execute when the URL is requested.

// // The callback function is defined using the async keyword, which allows it to use await to make an asynchronous HTTP request using the axios library. The try block contains the code that makes the request using axios.get(), passing in the URL of the API endpoint to retrieve data from.

// // If the request is successful, the server responds with the data received from the API endpoint in the response object using the res.send() method.

// // If there is an error while making the request, the code catches the error in the catch block and responds with a 500 status code and the error message in the response object using the res.status() and res.send() methods.

// app.get("/", async (req, res) => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     res.send(response.data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// // Finally, the code starts the server on port 3000 by calling the app.listen() method and passing in the port number to listen on. When the server starts successfully, it logs a message to the console.

// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });

import express from 'express';
import axios from 'axios';

const   = express();
app.use(express.json());

// Route to get all todos
app.get('/todos', async (req, res) => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    const todos = response.data;
    res.send(todos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to get a specific todo by ID
app.get('/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const todo = response.data;
    res.send(todo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to add a new todo
app.post('/todos', async (req, res) => {
  try {
    const newTodo = req.body;
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      newTodo
    );
    const createdTodo = response.data;
    res.send(createdTodo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to update an existing todo by ID model and controllers 
app.put('/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedTodo = req.body;
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      updatedTodo
    );
    const updated = response.data;
    res.send(updated);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Route to delete an existing todo by ID
app.delete('/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    res.send(`Todo with ID ${id} deleted successfully`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server salt hashing 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});