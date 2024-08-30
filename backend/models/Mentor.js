const mongoose = require('mongoose');
const { z } = require('zod');

// Define Zod schema for validation
const mentorSchemaValidation = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  expertise: z.string().min(1),
  available: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

// Mongoose Mentor schema
const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  expertise: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Validate mentor data using Zod
mentorSchema.pre('save', async function(next) {
  try {
    mentorSchemaValidation.parse(this.toObject());
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Mentor', mentorSchema);
