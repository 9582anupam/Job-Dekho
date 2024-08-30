const mongoose = require('mongoose');
const { z } = require('zod');

// Define Zod schema for validation
const assessmentSchemaValidation = z.object({
  title: z.string().min(1),
  description: z.string().min(10),
  questions: z.array(z.object({
    question: z.string().min(1),
    options: z.array(z.string()).nonempty(),
    correctAnswer: z.string().min(1)
  })),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

// Mongoose Assessment schema
const assessmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  questions: [{
    question: {
      type: String,
      required: true
    },
    options: [{
      type: String,
      required: true
    }],
    correctAnswer: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});

// Validate assessment data using Zod
assessmentSchema.pre('save', async function(next) {
  try {
    assessmentSchemaValidation.parse(this.toObject());
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('Assessment', assessmentSchema);
