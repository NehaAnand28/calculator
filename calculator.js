const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/",(req,res) => {
    // __dirname -> to know where this file resides , as most of the time our files are located in cloud
    res.sendFile(__dirname + '/index.html');
});

app.post("/",(req, res) => {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var sum = num1 + num2;

    res.send("Sum is " + sum);
});

app.listen(port ,() => {
    console.log("Server listening on port : " + `${port}` );
});
