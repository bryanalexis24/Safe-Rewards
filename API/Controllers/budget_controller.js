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

// Route to calculate remaining account balance
router.post('/calculateBalance', (req, res) => {
    // Extract data from request body
    const { cost, aside, freq, purchaseDate, minBalance } = req.body;
  
    // Convert cost, aside, freq, and minBalance to numbers
    const itemCost = parseFloat(cost);
    const asideAmount = parseFloat(aside);
    const frequency = parseInt(freq);
    const minimumBalance = parseFloat(minBalance);
  
    // Parse purchase date into a Date object
    const purchaseDateTime = new Date(purchaseDate);
  
    // Calculate total amount set aside until purchase date
    const currentDate = new Date(); // Current date
    const daysDifference = Math.ceil((purchaseDateTime - currentDate) / (1000 * 60 * 60 * 24)); // To the millisecond in a day
    const totalSetAside = daysDifference * (asideAmount / frequency);
  
    // Calculate remaining account balance
    const remainingBalance = minimumBalance + totalSetAside;
  
    // Respond with the remaining account balance
    res.json({ remainingBalance });
  });
  
  module.exports = router;