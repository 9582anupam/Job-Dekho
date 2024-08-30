const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('http-errors');

// Generate JWT token
exports.generateToken = (user) => {
  const payload = {
    id: user._id,
    role: user.role,
    email: user.email
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Hash a password
exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    throw createError(500, 'Error hashing password: ' + error.message);
  }
};

// Compare hashed password with plain text
exports.comparePassword = async (plainPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    throw createError(500, 'Error comparing password: ' + error.message);
  }
};
