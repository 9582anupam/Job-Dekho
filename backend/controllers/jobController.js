const Job = require('../models/Job');
const createError = require('http-errors');

// Create a new job listing
exports.createJob = async (req, res, next) => {
  try {
    jobSchemaValidation.parse(req.body);

    const newJob = new Job(req.body);
    await newJob.save();

    res.status(201).json(newJob);
  } catch (err) {
    next(createError(400, err.message));
  }
};

// Get all job listings
exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    next(createError(500, err.message));
  }
};

// Get a single job listing
exports.getJob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return next(createError(404, 'Job not found'));

    res.json(job);
  } catch (err) {
    next(createError(500, err.message));
  }
};

// Update a job listing
exports.updateJob = async (req, res, next) => {
  try {
    jobSchemaValidation.parse(req.body);

    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!job) return next(createError(404, 'Job not found'));

    res.json(job);
  } catch (err) {
    next(createError(400, err.message));
  }
};

// Delete a job listing
exports.deleteJob = async (req, res, next) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return next(createError(404, 'Job not found'));

    res.json({ msg: 'Job deleted successfully' });
  } catch (err) {
    next(createError(500, err.message));
  }
};
