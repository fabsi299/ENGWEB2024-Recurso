var express = require('express');
var router = express.Router();
var Livro = require('../controllers/livros');


router.get('/', (req, res) => {
    const { character, genre} = req.query;
    if (character) {
      console.log(character);
      Livro.getLivrosByCharacter(character)
        .then(Livros => res.json(Livros))
        .catch(err => res.status(400).json('Error: ' + err));
    } else if (genre) {
      Livro.getLivrosByGenre(genre)
        .then(Livros => res.json(Livros))
        .catch(err => res.status(400).json('Error: ' + err));
    }
    else {
      Livro.getAllLivros()
        .then(Livros => res.json(Livros))
        .catch(err => res.status(400).json('Error: ' + err));
    }
  });

  // Get list of unique espécies
  router.get('/genres', (req, res) => {
    Livro.getGenresList()
      .then(genres => res.json(genres.sort()))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.get('/characters', (req, res) => {
    Livro.getCharactersList()
      .then(characters => res.json(characters.sort()))
      .catch(err => res.status(400).json('Error: ' + err));
  });


// Get Livro by ID
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    Livro.findById(req.params.id)
      .then(Livro => res.json(Livro))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// Post a new Livro
router.post('/', (req, res) => {
    Livro.addNewLivro(req.body)
        .then(() => res.json('Livro added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Delete a Livro by ID
router.delete('/:id', (req, res) => {
    Livro.deleteLivroByIdById(req.params.id)
        .then(() => res.json('Livro deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* Alterar um Livro */
router.put('/:id', function(req, res) {
    Livro.update(req.params.id, req.body)
        .then(data => res.jsonp(data))
        .catch(erro => res.jsonp(erro))
});

module.exports = router;