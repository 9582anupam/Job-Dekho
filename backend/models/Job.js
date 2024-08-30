const mongoose = require('mongoose');
const { z } = require('zod');

// Define Zod schema for validation
const jobSchemaValidation = z.object({
  title: z.string().min(1),
  description: z.string().min(30),
  type: z.enum(['Private', 'Government', 'Overseas']),
  postedBy: z.string().min(1), // Reference to User ID
  location: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

// Mongoose Job schema
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Private', 'Government', 'Overseas'],
    required: true
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  location: {
    type: String
  }
}, {
  timestamps: true
});

// Validate job data using Zod
jobSchema.pre('save', async function(next) {
  try {
    jobSchemaValidation.parse(this.toObject());
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Job', jobSchema);
