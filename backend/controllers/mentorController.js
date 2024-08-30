const Mentor = require('../models/Mentor');
const createError = require('http-errors');

// Create a new mentor
exports.createMentor = async (req, res, next) => {
  try {
    mentorSchemaValidation.parse(req.body);

    const newMentor = new Mentor(req.body);
    await newMentor.save();

    res.status(201).json(newMentor);
  } catch (err) {
    next(createError(400, err.message));
  }
};

// Get all mentors
exports.getMentors = async (req, res, next) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    next(createError(500, err.message));
  }
};

// Get a single mentor
exports.getMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) return next(createError(404, 'Mentor not found'));

    res.json(mentor);
  } catch (err) {
    next(createError(500, err.message));
  }
};

// Update a mentor
exports.updateMentor = async (req, res, next) => {
  try {
    mentorSchemaValidation.parse(req.body);

    const mentor = await Mentor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mentor) return next(createError(404, 'Mentor not found'));

    res.json(mentor);
  } catch (err) {
    next(createError(400, err.message));
  }
};

// Delete a mentor
exports.deleteMentor = async (req, res, next) => {
  try {
    const mentor = await Mentor.findByIdAndDelete(req.params.id);
    if (!mentor) return next(createError(404, 'Mentor not found'));

    res.json({ msg: 'Mentor deleted successfully' });
  } catch (err) {
    next(createError(500, err.message));
  }
};
