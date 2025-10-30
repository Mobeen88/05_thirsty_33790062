//Create a new router
const express = require("express");
const router = express.Router();

//Define data
var shopData = {shopname: "The Thirsty Student",
                productCatergories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"]};

//Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData);
});

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData);
});

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData);
});

//Search in the database
router.get("/search_result", function (req, res) {
    res.send("You Search For: " + req.query.search_text + " in " + req.query.catergory);
});

router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
    res.send("Hello " + req.body.first + " " + req.body.last + " you have now registered!"
         + "We will send an email to you at: " + req.body.email);
});

//Export the router object so index.js can access it
module.exports = router;