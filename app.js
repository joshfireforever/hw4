const fakeData = require("faker");
const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

var randomName = fakeData.name.jobTitle();

//routes
app.get("/", function(req, res) {
    res.render("index.html", {"fakerField":randomName});
});

app.get("/design", function(req, res) {
    res.render("design.html", {"fakerField":randomName});
});

app.get("/impact", function(req, res) {
    res.render("impact.html", {"fakerField":randomName});
});

app.get("/experience", function(req, res) {
    res.render("experience.html", {"fakerField":randomName});
});

//starting server
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Express server is running...");
});