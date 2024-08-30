const express = require('express');
const router = express.Router();
const { generateCertificate } = require('../controllers/certificateController');
const { isAuthenticated } = require('../middleware/authMiddleware');

// Generate a certificate
router.post('/generate-certificate', isAuthenticated, generateCertificate);

module.exports = router;
