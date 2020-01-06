const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Database
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', { useNewUrlParser: true})
.then(() => console.log('Connected to database...'))
.catch(err => console.error(err));


// Middleware | To be performed after starting server but before Routes
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Controllers
const UserControl = require('./controllers/UserControl');

// Routes
app.post('/api/user/create', UserControl.create);
app.put('/api/user/update', UserControl.update);
app.get('/api/user/get', UserControl.get);
app.delete('/api/user/delete', UserControl.delete);

// Start Server
app.listen(port, (err) => {
    if (err) {
        console.log("Error starting server...");
    }
    else {
        console.log(`Listening on port: ${port}`)
    } 
});
    