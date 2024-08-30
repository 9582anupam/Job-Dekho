const express = require('express');
const router = express.Router();
const { createJob, getJobs, getJobById, updateJob, deleteJob } = require('../controllers/jobController');
const { isAuthenticated, authMiddleware } = require('../middleware/authMiddleware');

// Create a new job listing
router.post('/jobs', isAuthenticated, authMiddleware(['Admin', 'Recruiter']), createJob);

// Get all job listings
router.get('/jobs', getJobs);

// Get a specific job listing by ID
router.get('/jobs/:id', getJobById);

// Update a job listing
router.put('/jobs/:id', isAuthenticated, authMiddleware(['Admin', 'Recruiter']), updateJob);

// Delete a job listing
router.delete('/jobs/:id', isAuthenticated, authMiddleware(['Admin', 'Recruiter']), deleteJob);

module.exports = router;
