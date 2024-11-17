const express = require('express');
const User = require('../models/User');
const Assignment = require('../models/Assignment');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Register User
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = new User({ username, password });
  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
});

// Login User
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(404).json({ message: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, 'SECRET_KEY', { expiresIn: '1h' });
  res.status(200).json({ token });
});

// Upload Assignment
router.post('/upload', async (req, res) => {
  const { userId, task, admin } = req.body;

  const assignment = new Assignment({ userId, task, admin });
  await assignment.save();

  const user = await User.findById(userId);
  user.assignments.push(assignment._id);
  await user.save();

  res.status(201).json({ message: 'Assignment uploaded successfully' });
});

// Fetch All Admins
router.get('/admins', async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json(admins);
});

module.exports = router;
