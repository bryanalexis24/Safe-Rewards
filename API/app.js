const express = require('express');

const app = express();

const port = 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.json());

const user_controller = require("../API/Controllers/user_controller");
app.use('/users', user_controller);

app.get('/', (req, res) => {

    res.send("This is working");

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  module.exports = app;

