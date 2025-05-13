const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

const password = "secret_1"

// Define a GET endpoint
app.get("/api/greet", (req, res) => {
  const name = req.query.name || "World";
  res.status(200).json({ message: `Hello, ${name}!` });
});

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

console.log(password);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
