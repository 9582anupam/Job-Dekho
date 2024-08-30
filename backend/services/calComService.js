const axios = require('axios');
const createError = require('http-errors');

// Initialize the Cal.com API client
const calComApiClient = axios.create({
  baseURL: 'https://api.cal.com/v1', // Replace with Cal.com API base URL
  headers: { 'Authorization': `Bearer ${process.env.CALCOM_API_KEY}` }
});

// Function to create a new event
exports.createEvent = async (eventData) => {
  try {
    const response = await calComApiClient.post('/events', eventData);
    return response.data;
  } catch (error) {
    throw createError(500, 'Error creating event: ' + error.message);
  }
};

// Function to update event availability
exports.updateAvailability = async (availabilityData) => {
  try {
    const response = await calComApiClient.put('/availability', availabilityData);
    return response.data;
  } catch (error) {
    throw createError(500, 'Error updating availability: ' + error.message);
  }
};
