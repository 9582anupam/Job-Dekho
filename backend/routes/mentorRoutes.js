const express = require('express');
const router = express.Router();
const { getMentors, getMentorById, createMentor, updateMentor, deleteMentor } = require('../controllers/mentorController');
const { isAuthenticated, authMiddleware } = require('../middleware/authMiddleware');

// Get all mentors
router.get('/mentors', getMentors);

// Get a specific mentor by ID
router.get('/mentors/:id', getMentorById);

// Create a new mentor profile
router.post('/mentors', isAuthenticated, authMiddleware(['Admin']), createMentor);

// Update a mentor profile
router.put('/mentors/:id', isAuthenticated, authMiddleware(['Admin']), updateMentor);

// Delete a mentor profile
router.delete('/mentors/:id', isAuthenticated, authMiddleware(['Admin']), deleteMentor);

module.exports = router;
