const express = require("express");
const app = express();

app.use(logger);

app.get("/", (req,res) => {
    console.log("Home");
    res.send("<h1>Home Page</h1>");
})

app.get("/books", auth, (req,res) =>{
    console.log("Books");
    console.log(`Request has authorization = ${req.admin}`);
    res.send("<h1>Books Page</h1>");
})

app.all("*", (req,res) => {
    res.status(404).send("<h1 style> Page Not Found</h1>");
})

function logger(req, res, next) {
    console.log("Log Request");
    next();
}

function auth(req,res,next){
    if(req.query.admin === "true") {
        next();
    } else {
        res.send("Not Authorized!!");
    }
}

const appName = "Expresss Middleware";
const port = 5076;
app.listen(port, () => {
    console.log(`${appName} is running on port ${port}`);
})

