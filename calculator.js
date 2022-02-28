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
    var result;
    var operation = req.body.submit;
    switch (operation) {
        case "Add":
            result = num1 + num2;
            res.send("Sum is " + result);
            break;
        case "Sub":
            result = num1 - num2;
            res.send("Difference is " + result);
            break;
        case "Mul":
            result = num1 * num2;
            res.send("Product is " + result);
            break;
        case "Div":
            result = num1 / num2;
            res.send("Quotient is " + result);
            break;
        case "Mod":
            result = num1 % num2;
            res.send("Modulo is " + result);
            break;
        default:
            res.send("Error in submission");
    }
});

app.listen(port ,() => {
    console.log("Server listening on port : " + `${port}` );
});
