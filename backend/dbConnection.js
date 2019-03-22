module.exports = function(mongoose) {

    const URI = "mongodb://localhost/fav_authors_1schema";

    mongoose.connect(URI, {useNewUrlParser: true}, 
        err => console.log("db connections", err)
    );
}