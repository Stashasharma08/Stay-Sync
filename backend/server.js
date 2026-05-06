const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
let rooms = [
    {id: 1, number:101, type:"Single",status:"Available"},
    {id: 2, number:102, type:"single",status:"booked"},
    {id: 3, number:103, type:"Double",status:"Available"},
];

let bookings = [];

// Test route

app.get('/rooms', (req, res)=> {
    res.json(rooms);
});
app.get('/', (req, res) => {
    res.send('Server is running 🚀');
});


// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});