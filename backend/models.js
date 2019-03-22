const mongoose = require('mongoose');
require('./dbConnection')(mongoose);


// const BooksSchema = new mongoose.Schema({
//     title: {
//         type: String, 
//         required: [true, 'Book title is required'], 
//         minlength: [5, 'Book title must be at least 5 character']
//     },
//     genre: {
//         type: String,
//         required: [true, 'Book genre is required']
//     },
//     publication_year: {
//         type: String,
//         required: [true, 'Book publication year is required']
//     },
//     summery: {
//         type: String
//     },
//     cover: {
//         type: String,
//         required: [true, 'Book cover is mandatory']
//     }    
// }, {timestamps: true})

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Author Name is required'],
        minlength: [5, 'Author name should be min of 5 character']
    },
    image: {
        type: String,
        required: [true, 'We highly recommend to have the picture of Author']
    },
    books: [ 
        {
            title: {
                type: String, 
                required: [true, 'Book title is required'], 
                minlength: [5, 'Book title must be at least 5 character']
            },
            genre: {
                type: String,
                required: [true, 'Book genre is required']
            },
            publication_year: {
                type: String,
                required: [true, 'Book publication year is required']
            },
            summery: {
                type: String
            },
            cover: {
                type: String,
                required: [true, 'Book cover is mandatory']
            }    
        } ]
}, {timestamps: true});


const Author = mongoose.model('Authors', AuthorsSchema);
// const Book = mongoose.model('Books', BooksSchema);

module.exports = { Author };