const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const auth = require('../middlewares/authMiddleware');

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Protected route example
router.get('/me', auth, (req, res) => {
    res.json({ message: 'Protected route', user: req.user });
});

module.exports = router;