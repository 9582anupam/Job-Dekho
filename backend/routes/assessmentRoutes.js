const express = require('express');
const router = express.Router();
const { createAssessment, getAssessments, getAssessmentById, updateAssessment, deleteAssessment } = require('../controllers/assessmentController');
const { isAuthenticated, authMiddleware } = require('../middleware/authMiddleware');

// Create a new assessment test
router.post('/assessments', isAuthenticated, authMiddleware(['Admin']), createAssessment);

// Get all assessment tests
router.get('/assessments', getAssessments);

// Get a specific assessment test by ID
router.get('/assessments/:id', getAssessmentById);

// Update an assessment test
router.put('/assessments/:id', isAuthenticated, authMiddleware(['Admin']), updateAssessment);

// Delete an assessment test
router.delete('/assessments/:id', isAuthenticated, authMiddleware(['Admin']), deleteAssessment);

module.exports = router;
