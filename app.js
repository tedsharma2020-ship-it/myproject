const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello from Docker!",
    version: "1.0.0",
    author: "Gaurav Sharma"
  });
});

app.get('/health', (req, res) => {
  res.json({ status: "healthy" });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
