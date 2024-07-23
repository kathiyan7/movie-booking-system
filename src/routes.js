const express = require('express');
const router = express.Router();
const db = require('./db');

// User login
// Example response in routes.js
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Server error' });
      }
      if (results.length > 0) {
        res.json({ success: true, user: results[0] });
      } else {
        res.json({ success: false, message: 'Invalid credentials' });
      }
    });
  });  

// User signup
router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], (err, results) => {
    if (err) throw err;
    res.json({ success: true, userId: results.insertId });
  });
});

// Get movies
router.get('/movies', (req, res) => {
  const query = 'SELECT * FROM movies';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Book a movie
router.post('/book', (req, res) => {
  const { userId, movieId, theatre, seatNumber, timing } = req.body;
  const query = 'INSERT INTO bookings (user_id, movie_id, theatre, seat_number, timing) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [userId, movieId, theatre, seatNumber, timing], (err, results) => {
    if (err) throw err;
    res.json({ success: true, bookingId: results.insertId });
  });
});

module.exports = router;
