const fs = require("fs/promises");

async function ReadData(){
    try{
        await fs.access("./listdata.json", fs.constants.R_OK | fs.constants.W_OK);
        const dataIn = await fs.readFile("./listdata.json","utf-8");
        return JSON.parse(dataIn);

    }
    catch (error){
        console.error(error);
        return [];
    }
}

async function WriteData(dataOut){
    try{
        await fs.writeFile("./listdata.json", JSON.stringify(dataOut), "utf8");
    }
    catch (error){
        console.error(error);
        return;
    }
}

exports.ReadData = ReadData;
exports.WriteData = WriteData;



