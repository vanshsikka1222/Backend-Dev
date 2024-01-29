//API : Application Programming Interface
// fetch API / API Calls
// provides an interface for fetching (sending/recieving) resources.
// It uses Request and Response (Objects)
// The fetch() method is used to fetch a resource (data);

//let promise = fetch(url,[options]).........fetch returns promise

//API
const URL = "https://cat-fact.herokuapp.com/facts"

// let promise = fetch(URL);
// console.log(promise);

//Will execute response of this API call using Async-Await
const getFacts = async () => {
    console.log("getting data....")
    let response = await fetch(URL);
    console.log(response.status) //200 means Success
    console.log(response); //JSON format
};
//Output : will get our Response from API (Response is an Object)

//FACT: Even if we request API and after sometime when response 
// is coming, our page is getting response WITHOUT RELOADING

//API Calls : Occurs on runtime, all info is updated on runtime,
//without getting page reload..!!

// GET Request: (Just recieves our request)
//1. The Request that uses just (URL) in fetch method : fetch(url)
//2. The Request that basically gets our API response to us. 
//3. Max times we use fetch() API to get our request

/*
We have noticed that our Response that we got from fetch() get req.
It is much different from content of "https://cat-fact.herokuapp.com/facts"
To get same response, we have to understand few terms
*/

//AJAX, JSON, json()

