const mongoose = require('mongoose');
const { z } = require('zod');


// Define Zod schema for validation
const profileSchemaValidation = z.object({
  resume: z.string().url().optional(),
  jobApplications: z.array(z.string()).optional(),
  feedback: z.string().optional(),
  panCard: z.string().regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN card number'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

// Mongoose Profile schema
const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  panCard: {
    type: String,
    match: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
    required: true,
  },
  resume: {
    type: String,
    required: false
  },
  jobApplications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job'
  }],
  feedback: {
    type: String
  }
}, {
  timestamps: true
});

// Validate profile data using Zod
profileSchema.pre('save', async function(next) {
  try {
    profileSchemaValidation.parse(this.toObject());
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Profile', profileSchema);
