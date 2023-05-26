// The HTTP Library
// Will hold api fetch commands
class httpLibrary{
    async get(destination){
        try{
            let response = await fetch(destination);
            let books = await response.json();
            if(response.ok){
                return books;
            }
            else{
                document.getElementById("booksDisplay").innerHTML = "Error In Getting Data";
            }
        }
        catch(error){
            console.log(error.toString());
        }
        
    }
    async post(location, data){
        try {
            const dat = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // Stringify data before sending
            }
            let response = await fetch(location, dat);
            let postData = await response.json();
            console.log(postData);
            return postData;
        }
        catch(exception) {
            console.log(exception.toString());
        }
    }
}

const newLibrary = new httpLibrary();
let theList = [];
let theCList = [];
// Listener for the HTML buttons
window.addEventListener('DOMContentLoaded', async () => {
      /* Post Handler */
      document.getElementById('add').addEventListener('click', async (event)=> {
        const item = document.getElementById('listitem').value; // sets item to the inserted value
        try {
            theList.push(item);
            await newLibrary.post("/api",theList);  // posts item to list.json 
            ShowList(); 
            ShowCList();
        }
        catch (err) {
            // returns something if post doesn't work (TODO)
        }
      })

      /* Delete Handler */ 
      document.getElementById('delete').addEventListener('click', async (event)=> {
        const item = document.getElementById('listitem').value; // sets item to the inserted value
        try {
            console.log("deleting...")
            for(const target of theList) {
                if(target === item){
                    let index = theList.indexOf(item);
                    theList.splice(index, 1);
                }
            }
            theCList.push(item);
            await newLibrary.post("/api", theList);
            ShowList();
            ShowCList();
        }
        catch (err) {
            // returns something if post doesn't work (TODO)
        }
      })
});

async function GetList(){ // This will get the data from list.json 
    const listData = await newLibrary.get("/api"); // Fetches from list
    theList = listData; // Sets httpLibrary array to the data from json
    if(Array.isArray(listData)){
        theList = listData; 
    } else {
        console.log('listData is not an array');
    }
    ShowList(); // Sends list to html
    ShowCList();
    return;
}
function ShowList() { // Will show array data on html 
    let output = "<ol>";
    if (theList.length === 0)
        return;
    for (const item of theList){
        output += `<li>${item}</li>`;
    }
    output += "</ol>"
    document.getElementById("todo-list").innerHTML = output;
}

function ShowCList() {
    let output = "<ol>";
    if (theCList.length === 0)
        return;
    for (const item of theCList){
        output += `<li>${item}</li>`;
    }
    output += "</ol>"
    document.getElementById("completed-list").innerHTML = output;
}

GetList();

