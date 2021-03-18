const express = require("express");
const app = express();
app.listen(8080);

app.get("/", (req, res) => {
    res.send({message: "first message to /"})
})

app.get("/another", (req, res) => {
    res.send({message: "again"})
})

