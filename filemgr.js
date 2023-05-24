const fs = require("fs/promises");

async function ReadData(){
    try{
        await fs.access("./listdata.json", fs.constants.R_OK | fs.constants.W_OK);
        const dataIn = await fs.readFile("./listdata.json","utf-8");
        return JSON.parse(dataIn);
    }
    catch (error){
        console.log(error);
        return [];
    }
}

async function WriteData(dataOut){
    try{
        await fs.access("./listdata.json", fs.constants.R_OK | fs.constants.W_OK);
        const dataIn = await fs.readFile("./listdata.json", "utf-8");
        let currentData = JSON.parse(dataIn);
        if (!Array.isArray(currentData)) {
            console.log("Is not an array");
        }
        currentData.push(dataOut);
        await fs.writeFile("./listdata.json", JSON.stringify(currentData), "utf-8");
    }
    catch (error){
        console.log(error);
        return [];
    }
}
async function ReplaceData(dataOut){
    await fs.access("./listdata.json", fs.constants.R_OK | fs.constants.W_OK);
    try{
        if (!Array.isArray(dataOut)) {
            console.log("Is not an array");
        }
        await fs.writeFile("./listdata.json", JSON.stringify(dataOut), "utf-8");
    }
    catch (error){
        console.log(error);
        return [];
    }
}

exports.ReadData = ReadData;
exports.WriteData = WriteData;
exports.ReplaceData = ReplaceData;



