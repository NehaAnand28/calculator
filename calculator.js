const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    // __dirname -> to know where this file resides , as most of the time our files are located in cloud
    res.sendFile(__dirname + '/index.html');
});

app.post("/",(req, res) => {
    res.send("Thank you for posting!");
});

app.listen(port ,() => {
    console.log("Server listening on port : " + `${port}` );
});
