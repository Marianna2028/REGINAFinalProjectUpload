const express = require('express');
const path = require('path');

const app = express();

// Routes
const apiRoutes = require('./api_routes_dev');
app.use('/api', apiRoutes);

// Serve static frontend files
app.use(express.static(__dirname));

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dev_html.html'));
});

// Export for Vercel
module.exports = app;

// ONLY listen locally
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}
