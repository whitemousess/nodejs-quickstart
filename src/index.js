const path = require("path");
const express = require("express");
const handlebars = require("express-handlebars");
const cors = require('cors');
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");


const route = require("./routes");
const db = require("./config/db");

app.use(cors());
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 
// read token in cookie
app.use(cookieParser());

app.engine('.hbs', handlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "views"));


route(app);
db.connect();

app.listen(port,() => {
    console.log("app listening on :",port);
});
