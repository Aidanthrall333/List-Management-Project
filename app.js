const express = require("express");
const fm = require("./filemgr.js");
const app = express();

app.use(express.static("./Client"));
app.use(express.json());


app.get('/api', async (req,res) =>{
    res.send(await fm.ReadData());
})
app.post('/api', async (req,res) =>{
    await fm.WriteData(req.body);
    res.send(await fm.ReadData());
})
app.all("*", (req,res) => {
    res.status(404).send("<h1> Page not Found </h1>");

})

const appName = "Express Middleware";
const port = 5000;

app.listen(port, () =>{
    console.log(`${appName} is running on port ${port}`);
})
