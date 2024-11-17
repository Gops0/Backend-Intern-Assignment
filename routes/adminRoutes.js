const express = require('express');
const Admin = require('../models/Admin');
const Assignment = require('../models/Assignment');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Register Admin
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const adminExists = await Admin.findOne({ username });
  if (adminExists) return res.status(400).json({ message: 'Admin already exists' });

  const admin = new Admin({ username, password });
  await admin.save();
  res.status(201).json({ message: 'Admin registered successfully' });
});

// Login Admin
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(404).json({ message: 'Admin not found' });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ adminId: admin._id }, 'SECRET_KEY', { expiresIn: '1h' });
  res.status(200).json({ token });
});

// View Assignments for Admin
router.get('/assignments', async (req, res) => {
  const { adminId } = req.query;
  const assignments = await Assignment.find({ admin: adminId });
  res.status(200).json(assignments);
});

// Accept or Reject Assignment
router.post('/assignments/:id/accept', async (req, res) => {
  const { id } = req.params;
  const assignment = await Assignment.findById(id);
  assignment.status = 'accepted';
  await assignment.save();
  res.status(200).json({ message: 'Assignment accepted' });
});

router.post('/assignments/:id/reject', async (req, res) => {
  const { id } = req.params;
  const assignment = await Assignment.findById(id);
  assignment.status = 'rejected';
  await assignment.save();
  res.status(200).json({ message: 'Assignment rejected' });
});

module.exports = router;
