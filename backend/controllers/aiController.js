const { generateRecommendations, analyzeResume } = require('../services/aiService'); // Hypothetical AI service
const createError = require('http-errors');

// Get AI recommendations
exports.getRecommendations = async (req, res, next) => {
  try {
    const recommendations = await generateRecommendations(req.body);
    res.json(recommendations);
  } catch (err) {
    next(createError(500, err.message));
  }
};

// Analyze resume
exports.analyzeResume = async (req, res, next) => {
  try {
    const analysis = await analyzeResume(req.body.resume);
    res.json(analysis);
  } catch (err) {
    next(createError(500, err.message));
  }
};
