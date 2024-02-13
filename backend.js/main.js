const express = require("express");
const app = express();
const port = 8100;

// Define your routes here
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.post("/ingest", (req, res) => {
  // Handle the /ingest request here
  res.send("Ingesting data...");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
