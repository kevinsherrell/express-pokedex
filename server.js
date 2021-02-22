const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const pokemon = require('./models/pokemon.js');


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());


// GET all pokemon
// GET pokemon by id
// GET pokemon form to enter new pokemon data
// GET pokemon form to edit pokemon data
// POST new pokemon data
// PUT update pokemon data by id
// DELETE delete pokemon by id

//test
app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});