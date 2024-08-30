const express = require('express');
const router = express.Router();
const { register, login, getUser, updateUser } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/authMiddleware');

// Register a new user
router.post('/register', register);

// Login a user
router.post('/login', login);

// Get authenticated user details
router.get('/user', isAuthenticated, getUser);

// Update user details
router.put('/user', isAuthenticated, updateUser);

module.exports = router;
