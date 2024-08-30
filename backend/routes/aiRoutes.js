const express = require('express');
const router = express.Router();
const { getRecommendations, analyzeResume, generateJD } = require('../controllers/aiController');
const { isAuthenticated } = require('../middleware/authMiddleware');

// Get job or applicant recommendations
router.get('/recommendations', isAuthenticated, getRecommendations);

// Analyze uploaded resume
router.post('/analyze-resume', isAuthenticated, analyzeResume);

// Generate job description (JD) using AI
router.post('/generate-jd', isAuthenticated, generateJD);

module.exports = router;
