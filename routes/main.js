//Create a new router
const express = require("express");
const router = express.Router();

//Define data
var shopData = {shopname: "The Thirsty Student",
    productCatergories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shops: [
        {image:"shopkeeper 2.png", location:"Lumious", manager:"Urbain", address:"Lumious, ZA"},
        {image:"shopkeeper 1.png", location:"Pallet Town", manager:"Oak", address:"Kanto, FL"},
        {image:"shopkeeper.png", location:"Shalour City", manager:"Korina", address:"Shalour, XYZ"}
    ]};

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
    res.send(`
        <p> <strong> You Search For: </strong> ${req.query.search_text} in ${req.query.catergory} </p>`
    );
});

router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

router.post("/registered", (req, res) => {
    res.send(`
        <p> Hello <strong> ${req.body.first} ${req.body.last} </strong> you have now registered! </p>
          <p> We will send an email to you at: <strong> ${req.body.email} </strong> </p>`
        );
});

router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
});

router.post("/surveyed", (req, res) => {
    res.send(`
        <h1> ${req.body.first} ${req.body.last} Thank you for completing the survey! </h1>
        <p> <strong> To verify, your email is: </strong> ${req.body.email} </p>
        <p> <strong> Age: </strong> ${req.body.age} </p>
        <p> <strong> Your preferred drink is: </strong> ${req.body.consume} </p>
        <p> <strong> You are student: </strong> ${req.body.student ? "Yes" : "No"} </p>`
    );
});

//Export the router object so index.js can access it
module.exports = router;