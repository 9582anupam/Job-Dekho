const axios = require('axios');
const createError = require('http-errors');

// Initialize the Gemini API client
const geminiApiClient = axios.create({
  baseURL: 'https://api.gemini.com/v1', // Replace with Gemini API base URL
  headers: { 'Authorization': `Bearer ${process.env.GEMINI_API_KEY}` }
});

// Function to get AI recommendations
exports.getRecommendations = async (data) => {
  try {
    const response = await geminiApiClient.post('/recommendations', data);
    return response.data;
  } catch (error) {
    throw createError(500, 'Error fetching AI recommendations: ' + error.message);
  }
};

// Function to analyze resumes
exports.analyzeResume = async (resumeData) => {
  try {
    const response = await geminiApiClient.post('/resume-analysis', resumeData);
    return response.data;
  } catch (error) {
    throw createError(500, 'Error analyzing resume: ' + error.message);
  }
};
