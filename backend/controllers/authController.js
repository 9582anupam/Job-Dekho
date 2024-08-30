const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { userSchemaValidation } = require('../models/User');
const createError = require('http-errors'); // For handling HTTP errors

// Register a new user
exports.register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    userSchemaValidation.parse({ name, email, password, role });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    next(createError(400, err.message));
  }
};

// User login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw createError(401, 'Invalid email or password');
    }

    const token = jwt.sign({ user: { id: user._id, role: user.role } }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    next(createError(401, err.message));
  }
};

// Middleware for role-based access control
exports.authMiddleware = (roles = []) => (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) return next(createError(401, 'No token, authorization denied'));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;

    if (roles.length && !roles.includes(req.user.role)) {
      return next(createError(403, 'Access denied'));
    }

    next();
  } catch (err) {
    next(createError(401, 'Token is not valid'));
  }
};
