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
app.get('/', (req, res) => {
    res.render('index', {data: pokemon});
});
// GET pokemon form to enter new pokemon data
app.get('/new', (req, res) => {
    res.render('new');
});
// GET pokemon form to edit pokemon data
app.get('/edit', (req, res) => {
    console.log('Edit existing pokemon');
});
// GET pokemon by id
app.get('/:id', (req, res) => {
    res.render('show', {data: pokemon[req.params.id]});
});
// POST new pokemon data
app.post('/', (req, res) => {
    pokemon.push(req.body);
    res.render('index', {data: pokemon});
});
// PUT update pokemon data by id
app.put("/:id", (req, res) => {
    console.log('update pokemon by id');
});
// DELETE delete pokemon by id
app.delete('/:id', (req, res) => {
    console.log('delete pokemon by id');
});

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});