const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const livroSchema = new Schema({
    _id: String, // Transform 'bookId' to '_id'
    title: String,
    series: String,
    author: [String], // List of authors
    rating: Number,
    description: String,
    language: String,
    isbn: String,
    genres: [String], // List of genres
    characters: [String], // List of characters
    bookFormat: String,
    edition: String,
    pages: Number,
    publisher: String,
    publishDate: Date, // Date field
    firstPublishDate: Date, // Date field
    awards: [String], // List of awards
    numRatings: Number,
    ratingsByStars: [Number], // List of ratings by stars
    likedPercent: Number,
    setting: [String], // List of settings
    coverImg: String,
    bbeScore: Number,
    bbeVotes: Number,
    price: Number
}, {
    versionKey: false, // Disables the versioning field "__v"
});

const Livro = mongoose.model('Livro', livroSchema); // Changed 'livros' to 'Livro'

module.exports = Livro;
