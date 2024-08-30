const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const Profile = require('../models/Profile');
const createError = require('http-errors');

// Setup multer for file upload
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/resumes'); // Directory where resumes will be saved
    },
    filename: function (req, file, cb) {
      cb(null, `${req.user.id}-${Date.now()}${path.extname(file.originalname)}`); // Unique filename
    },
  }),
  fileFilter: function (req, file, cb) {
    // Accept only PDF files
    if (!file.originalname.match(/\.(pdf)$/)) {
      return cb(new Error('Only PDF files are allowed!'), false);
    }
    cb(null, true);
  },
});

// Create or update user profile
exports.createOrUpdateProfile = async (req, res, next) => {
  try {
    profileSchemaValidation.parse(req.body);

    const profile = await Profile.findOneAndUpdate({ user: req.user.id }, req.body, { new: true, upsert: true });
    res.json(profile);
  } catch (err) {
    next(createError(400, err.message));
  }
};

// Get user profile
exports.getProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) return next(createError(404, 'Profile not found'));

    res.json(profile);
  } catch (err) {
    next(createError(500, err.message));
  }
};

// Get user feedback
exports.getFeedback = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (!profile) return next(createError(404, 'Profile not found'));

    res.json(profile.feedback);
  } catch (err) {
    next(createError(500, err.message));
  }
};

// Resume builder functionality
exports.buildResume = async (req, res, next) => {
  try {
    // Implement resume building logic here
    res.json({ msg: 'Resume built successfully' });
  } catch (err) {
    next(createError(500, err.message));
  }
};

// Route for uploading resume
exports.uploadResume = upload.single('resume'), async (req, res, next) => {
  try {
    if (!req.file) return next(createError(400, 'No file uploaded'));

    // Update profile with resume path
    const profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { resumePath: req.file.path },
      { new: true }
    );

    res.json({ message: 'Resume uploaded successfully', profile });
  } catch (err) {
    next(createError(500, err.message));
  }
};

// Route for fetching resume details
exports.getResumeDetails = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });

    if (!profile || !profile.resumePath) {
      return next(createError(404, 'Resume not found'));
    }

    // Check file extension and process accordingly
    if (path.extname(profile.resumePath) === '.pdf') {
      const dataBuffer = fs.readFileSync(profile.resumePath);
      const data = await pdfParse(dataBuffer);
      res.json({ resumeText: data.text });
    } else {
      res.json({ message: 'Resume is not a PDF or cannot be processed' });
    }
  } catch (err) {
    next(createError(500, err.message));
  }
};
