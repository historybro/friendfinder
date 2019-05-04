var express = require("express");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function() {
    console.log("app listening on PORT: "+PORT);
})