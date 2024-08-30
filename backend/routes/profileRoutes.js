const express = require('express');
const router = express.Router();
const { createOrUpdateProfile, getProfile, getFeedback, buildResume } = require('../controllers/profileController');
const { isAuthenticated } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware'); // Middleware for handling file uploads

// Create or update user profile
router.post('/profile', isAuthenticated, createOrUpdateProfile);

// Get user profile
router.get('/profile', isAuthenticated, getProfile);

// Get user feedback
router.get('/profile/feedback', isAuthenticated, getFeedback);

// Build and upload resume
router.post('/profile/resume', isAuthenticated, upload.single('resume'), buildResume);

module.exports = router;
