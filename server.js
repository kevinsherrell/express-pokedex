const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const pokemon = require('./models/pokemon.js');


app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
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
app.get('/:id/edit', (req, res) => {
    let selectedPokemon = pokemon.find(pkmn => {
        return pkmn.id === req.params.id;
    })

    res.render('edit', {data: selectedPokemon});
});
// GET pokemon by id
app.get('/:id', (req, res) => {
    console.log('this route works');
    let selectedPokemon = pokemon.find(pkmn => {
        return pkmn.id === req.params.id;
    })
    if (selectedPokemon) {
        res.render('show', {data: selectedPokemon});
    } else {
        res.send("pokemon does not exist");
    }
    ;
});
// POST new pokemon data
app.post('/', (req, res) => {
    pokemon.push(req.body);
    res.render('index', {data: pokemon});
});
// PUT update pokemon data by id
app.put("/:id", (req, res) => {
    console.log(req.body);
    let selectedPokemon = pokemon.find(pkmn => {
        return pkmn.id === req.params.id;
    })
    if (selectedPokemon) {
        let updatedPokemon = Object.assign(selectedPokemon, req.body);
        pokemon[selectedPokemon] = updatedPokemon;
        res.redirect(`/${updatedPokemon.id}`)
    } else {
        res.send('pokemon does not exist');
    }
    ;

});
// DELETE delete pokemon by id
app.delete('/:id', (req, res) => {
    console.log(req.body);
    let selectedPokemon = pokemon.find(pkmn => {
        return pkmn.id === req.params.id;
    })
    if (selectedPokemon) {
        const pokemonIndex = pokemon.indexOf(selectedPokemon)
        pokemon.splice(pokemonIndex, 1);
        res.render('index', {data: pokemon})
    } else {
        res.send('pokemon does not exist');
    }
    ;

});


app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
});