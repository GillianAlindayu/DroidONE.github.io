const express = require('express');
const app = express(); 
const port = 3000; 

app.user(express.json()); 

//basic routes 

    app.get('/', (req, res) => {
        res.send('Welcome to the REST API');
    });

    app.get('/users', (req, res) => {
        res.json([
            { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
            { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
        ]);
    });