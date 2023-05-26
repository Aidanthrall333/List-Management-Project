const express = require("express");
const fm = require("./filemgr");
const app = express();
app.use(express.static("./Client"));
app.use(express.json());

//get function for app


app.all("*", (req,res) => {
    console.log("Path does not exist");
    res.status(404).send("<h1>Page Not Found...</h1>");
});

const appName = "List Management Project";
const port = 5000;
app.listen(port, () => {
    console.log(`App ${appName} is running on port ${port}`);
});