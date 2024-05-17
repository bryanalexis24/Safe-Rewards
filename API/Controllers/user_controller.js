const express = require('express');
const router = express.Router();
const users = require("../users"); 

// Route to get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Route to get a specific user by ID
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const user = users.find(user => user.id === parseInt(userId));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Route to create a new user
router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1,  
    name: req.body.name,
    password: req.body.password,  // In a real application, hash the password
    email: req.body.email,
    balance : 11250,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
