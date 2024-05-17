const express = require('express');
const app = express();
const port = 5500;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Controllers
const user_controller = require("../API/Controllers/user_controller");
const budget_controller = require("../API/Controllers/budget_controller");

// Routes

app.use('/users', user_controller);
app.use('/budget', budget_controller);

// Additional routes
app.get('/', (req, res) => {
    res.send("This is working");
});

// Route for API information
app.get("/about", (req, res) => {
    res.send("This is an API service for CRUD actions on movies resources.");
});

// Dynamic route based on the provided name parameter
app.get("/about/:name", (req, res) => {
    const name = req.params.name;
    res.send("This is an API service for CRUD actions on a movies resource...for you " + name);
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;


