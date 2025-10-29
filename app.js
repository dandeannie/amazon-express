const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const homeHandler = require('./home');
const aboutHandler = require('./about');
const contactHandler = require('./contact');

// Routes
app.get('/', homeHandler);

app.get('/about', aboutHandler);

app.get('/contact', contactHandler);

// Start server
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});

module.exports = app;

