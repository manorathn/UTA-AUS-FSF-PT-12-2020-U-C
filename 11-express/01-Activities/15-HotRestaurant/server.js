const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));
app.get('/add', (req, res) => res.sendFile(path.join(__dirname, 'add.html')));

// LISTENER
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));