'use strict';
const express = require('express');
const app = express();
const homeController = require('./controllers/homeController');
const port = 4000;
const path = require('path');

// Moteur de templates
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('Public'));

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/resultats', homeController.getConfig);

app.listen(port, ()=>{
    console.log('listening on port 4000');
});