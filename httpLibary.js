class HTTPLibrary{

    /**
     * Constructor for our HTTPLibrary object. We initialize baseURL
     * which is given the url of the web server. We do not have a path
     * yet, that will be implimented in other functions
     */
    constructor(baseURL){
        this.baseURL= baseURL;
    }

    /**
     * This function will get the data from server and return a promise that 
     * contains a json data structure. the parameter path will be the path to 
     * the desired endpoint of the baseURL. This function will handle the HTTP
     * request and response.
     */
    async get(path){
        try{
            // Fetch the data from the server
            const response = await fetch(this.baseURL + path);

            // Parse the data into a json object
            const data = await response.json();
            return data;
        }
        catch(error){
            //NEED TO FIX THIS ERROR MESSAGE
            console.log(error);
        }
    }

    /**
     * this function will handle the HTTP POST request and response. The parameter
     * path will be the desired endpoint of the baseURL. The parameter body will be 
     * the data we want to create on the server.
     */
    async post(path, body){
        try{
            // Fetch the data from the server
            const response = await fetch(this.baseURL + path, {
                method: 'POST',
                //defines the data we are going to send to be in json format
                headers: {
                    'Content-Type': 'application/json'
                },
                //turns the string into a json data structure
                body: JSON.stringify(body)
                });
            //Parse the data into a json object
            const data = await response.json();
            return data;
        }
        catch(error){
            //NEED TO FIX THIS ERROR MESSAGE
            console.log(error);
        }
    }
    /**
     * This function will handle the HTTP PUT request and response. The parameter
     * path will be the desired endpoint of the baseURL. The parameter body will be
     * the data we want to update on the server
     */
    async put(path, body){
        try{
            // Fetch the data from the server
            const response = await fetch(this.baseURL + path, {
                method: 'PUT',
                //defines the data we are going to send to be in json format
                headers:{
                    'Content-Type': 'application/json'
                },
                //turns the string into a json data structure
                body: JSON.stringify(body)
            });
            //Parse the data into a json object
            const data = response.json();
            return data;
        }
        catch(error){
            //NEED TO FIX THIS ERROR MESSAGE
            console.log(error);
        }
    }
    /**
     * This function will handle the HTTP DELETE request and response. The parameter
     * path will be the desired endpoint of the baseURL. The parameter body will be 
     * the data we want to delete on the server
     */
    async delete(path){
        try{
            // Fetch the data from the server
            const response = await fetch(this.baseURL + path, {
                method: 'DELETE',
            });
            //SHOW THE USER THE DELETE REQUEST WAS SUCCESSFUL
        }
        catch(error){
            //NEED TO FIX THIS ERROR MESSAGE
            console.log(error);
        }
    }

}