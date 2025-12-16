const express = require('express');
const path = require('path');

const app = express();

// API routes
const api_routes = require('./api_routes_dev.js');
app.use('/api', api_routes);

// serve static files (JS, CSS)
app.use(express.static(__dirname));

// serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dev_html.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
