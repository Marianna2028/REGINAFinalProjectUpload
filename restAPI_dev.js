const express = require('express');
const path = require('path');
const apiRoutes = require('./api_routes_dev');

const app = express();

// API routes
app.use('/api', apiRoutes);

// Serve frontend static files
app.use(express.static(path.join(__dirname, 'front_end')));

// Serve HTML at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front_end', 'dev_html.html'));
});

// Export for Vercel
module.exports = app;

// ONLY listen locally
if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}
