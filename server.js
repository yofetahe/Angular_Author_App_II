const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/Authors'));

// app.all("*", (req,res,next) => {
//   res.sendFile(path.resolve("./public/dist/Authors/index.html"))
// });

require('./backend/routes')(app);

const server = app.listen(4040, () => { 
  console.log("Server is running on", server.address().port);
});
