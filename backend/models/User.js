const mongoose = require('mongoose');
const { z } = require('zod');

// Define Zod schema for validation
const userSchemaValidation = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['Applicant', 'Admin', 'Recruiter', 'Mentor']),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

// Mongoose User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['Applicant', 'Admin', 'Recruiter', 'Mentor'],
    required: true
  }
}, {
  timestamps: true
});

// Validate user data using Zod
userSchema.pre('save', async function(next) {
  try {
    userSchemaValidation.parse(this.toObject());
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('User', userSchema);
