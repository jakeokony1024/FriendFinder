let express = require("express");
let path = require("path");

var app = express();
var PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});