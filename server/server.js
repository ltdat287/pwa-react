const express = require("express");
const path = require('path');
const app = express();

app.set("port", process.env.PORT || 3001);

app.get('/api/test', (rep, res) => {
  res.json({
    success: 'test'
  });
  console.log('Sent list of items');
});

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, '../build')));

  // Handles any requests that don't match the ones above
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '../build/index.html'));
  });
}

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});