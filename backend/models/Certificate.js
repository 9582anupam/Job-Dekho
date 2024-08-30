const mongoose = require('mongoose');
const { z } = require('zod');

// Define Zod schema for validation
const certificateSchemaValidation = z.object({
  title: z.string().min(1),
  issuedBy: z.string().min(1),
  issuedTo: z.string().min(1),
  issuedDate: z.date(),
  validUntil: z.date().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

// Mongoose Certificate schema
const certificateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  issuedBy: {
    type: String,
    required: true
  },
  issuedTo: {
    type: String,
    required: true
  },
  issuedDate: {
    type: Date,
    required: true
  },
  validUntil: {
    type: Date
  }
}, {
  timestamps: true
});

// Validate certificate data using Zod
certificateSchema.pre('save', async function(next) {
  try {
    certificateSchemaValidation.parse(this.toObject());
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Certificate', certificateSchema);
