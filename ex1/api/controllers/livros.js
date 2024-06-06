const mongoose = require("mongoose");
const Livro = require('../models/livros'); // Adjust the path as necessary

module.exports.getAllLivros = () => Livro.find();

module.exports.findById = id => {
    return Livro
        .findOne({_id : id}) // Finds a single document by its MongoDB ObjectID
        .exec(); // Executes the query
  };

  module.exports.getLivrosByCharacter = (char) => {
    return Livro.find({ "characters": { $in: [char] } });
};


module.exports.getLivrosByGenre = (genre) => {
    // Use the '$in' operator to find books where the 'genres' field includes the 'genre' argument
    return Livro.find({ "genres": { $in: [genre] } });
};


module.exports.getCharactersList = async () => {
    try {
        const charactersList = await Livro.distinct("characters"); // Encontre valores únicos no campo 'characters'
        charactersList.sort(); // Ordene alfabeticamente
        return charactersList;
    } catch (error) {
        console.error("Erro ao obter lista de personagens:", error);
        throw error;
    }};
    
module.exports.getGenresList = async () => {
    try {
        const genresList = await Livro.distinct("genres"); // Encontre valores únicos no campo 'characters'
        genresList.sort(); // Ordene alfabeticamente
        return genresList;
    } catch (error) {
        console.error("Erro ao obter lista de personagens:", error);
        throw error;
    }
};

//------
module.exports.addNewBook = (LivroData) => new Livro(LivroData).save();

module.exports.deleteLivroById = (id) => Livro.findByIdAndDelete(id);

module.exports.update = (id, body) => {
    return Livro
        .findByIdAndUpdate(id, body, { new: true })
}