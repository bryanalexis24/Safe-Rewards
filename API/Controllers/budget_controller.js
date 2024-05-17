const express = require('express');
const router = express.Router();
const budgets = require('../budget');

// Route to get all budgets
router.get('/', (req, res) => {
  res.json(budgets);
});

// Route to get a specific budget by ID
router.get('/:budgetId', (req, res) => {
  const { budgetId } = req.params;
  const budget = budgets.find(b => b.id === parseInt(budgetId));
  if (budget) {
    res.json(budget);
  } else {
    res.status(404).json({ error: 'Budget not found' });
  }
});

// Route to create a new budget
router.post('/', (req, res) => {
  const newBudget = {
    id: budgets.length + 1,
    name: req.body.name,
    cost: parseFloat(req.body.cost),  // Ensure cost is a number
    aside: parseFloat(req.body.aside),  // Ensure aside is a number
    freq: parseInt(req.body.freq, 10),  // Ensure freq is an integer
    date: req.body.date,  // Date should be in a valid format
  };
  budgets.push(newBudget);
  res.status(201).json(newBudget);
});

module.exports = router;
