const { z } = require('zod');
const createError = require('http-errors');

// Define a Zod schema for user input validation
const userSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['Applicant', 'Admin', 'Recruiter', 'Mentor'], 'Invalid role')
});

// Validate user input based on the defined schema
exports.validateUserInput = (data) => {
  try {
    userSchema.parse(data);
  } catch (error) {
    throw createError(400, error.errors.map(err => err.message).join(', '));
  }
};

// Function to validate PAN card number format
exports.validatePANCard = (panCardNumber) => {
  const panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  if (!panCardRegex.test(panCardNumber)) {
    throw createError(400, 'Invalid PAN card number format');
  }
};

// Function to validate GST number format
exports.validateGSTNumber = (gstNumber) => {
  const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
  if (!gstRegex.test(gstNumber)) {
    throw createError(400, 'Invalid GST number format');
  }
};
//certbot
//model improv
//minor changes
//testing