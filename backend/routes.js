const controllers = require('./controllers');
const path = require('path')

module.exports = app => {

    app
        .get('/api/authors', controllers.getAllAuthors)
        .get('/api/authors/:id', controllers.getAuthorById)
        .post('/api/authors', controllers.addAuthor)
        .put('/api/authors/:id', controllers.updateAuthor)
        .put('/api/authors/books/:auth_id/:book_id', controllers.updateBookInfo)
        .put('/api/authors/books/:id', controllers.updateAuthorBooks)
        .delete('/api/authors/:id', controllers.deleteAuthor)
        .all("*", (req,res,next) => {
            res.sendFile(path.resolve("./public/dist/Authors/index.html"))
        });
          
}