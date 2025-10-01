// Server: Whats a server?
// CURD -> Creat | Update | Read | Delete 
// npm install express (to install the express js)
// we will initialize it (npm init)
// npm init -y

// Import express
const express = require("express");

// Create an express app
const app = express();

// Define a port
const PORT = 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, Shaheer Jamal is teaching");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});




