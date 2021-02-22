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
app.get('/pokemon', (req, res) => {
    console.log('Get all pokemon');
});
// GET pokemon by id
app.get('/pokemon/:id', (req, res) => {
    console.log('Get pokemon by id');
});
// GET pokemon form to enter new pokemon data
app.get('/pokemon/new', (req, res) => {
    console.log('Create new pokemon');
});
// GET pokemon form to edit pokemon data
app.get('/pokemon/edit', (req, res) => {
    console.log('Edit existing pokemon');
});
// POST new pokemon data
app.post('/pokemon', (req, res) => {
    console.log('Post new pokemon');
});
// PUT update pokemon data by id
app.put("/pokemon/:id", (req, res) => {
    console.log('update pokemon by id');
});
// DELETE delete pokemon by id
app.delete('/pokemon/:id', (req, res) => {
    console.log('delete pokemon by id');
});

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});