//AJAX, JSON, json()

//AJAX : Asynchronous JS & XML (old type of data format)

/*
JSON : JavaScript Object Notation 
(Aaj k time mai data goes in JSON format)
Aaj k time mai mostly API's hai returns data in JSON format,
that API's are called AJAJ(Asynchronous Javascript And Json)
Termed as AJAX but uses JSON instead of XML
*/

/*
We get API response in JSON Format (which is not an actual readable JS)
To convert that into proper JS Object we use "json() method (async)"
*/

/*
json() : a method that returns a second promise that resolves with 
the result of parsing the response body text as JSON
--Input is JSON, Output is JS object.
*/

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    console.log("getting data....");
    let response = await fetch(URL); 
    console.log(response); //response is in JSON format
    
    let data = await response.json();
    console.log(data); //data is in JS Object format (usable)
    //Output: (5) [{…}, {…}, {…}, {…}, {…}] Array of 5 objects
    
    //Now can access that data like:
    console.log(data[0].text);
    //Output :Owning a cat can reduce the risk of stroke and heart attack by a third.
    console.log(data[1].text);
};
//Now can use this data with HTML and CSS files to do any operations


//Same thing with PROMISE CHAINING, but not a better option
/*
function getFacts() {
    fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
        })
    }
*/





