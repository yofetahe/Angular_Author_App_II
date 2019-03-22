const { Author } = require('./models');

module.exports = {

  getAllAuthors: (req, res) => {
    Author.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getAuthorById: (req, res) => {
    const ID = req.params.id;
    Author.find({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  addAuthor: (req, res) => {
    const DATA = req.body;
    Author.create(DATA, {runValidators: true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateAuthor: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne({ _id: ID }, DATA, {runValidators: true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateAuthorBooks: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Author.updateOne(
      { _id: ID }, 
      {$push: {books: {
            title: DATA.title,
            genre: DATA.genre,
            publication_year: DATA.publication_year,
            summery: DATA.summery,
            cover: DATA.cover
      }}}, {runValidators: true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateBookInfo: (req, res) => {
    const AUTHOR_ID = req.params.auth_id;
    const BOOK_ID = req.params.book_id;
    const DATA = req.body;    
    Author.updateOne(
      {_id: AUTHOR_ID, "books._id": BOOK_ID}, 
      {$set: {"books.$": DATA}}, {runValidators: true})
    .then(data => res.json(data))
    .catch(err => res.json(err));
  },

  deleteAuthor: (req, res) => {
    const ID = req.params.id;
    Author.findOneAndDelete({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}