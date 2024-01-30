//Formatting API Requests

// Your Frontend ----> GET Req ----> Your Server (PRIVATE API)
// Your Server ----> GET Req ----> Someone else's Server (PUBLIC API)

//Structuring API
// BaseURL/Endpoint (Response depends on Endpoints)

// Eg: https://bored-api.appbrewery.com/some-endpoint
const BaseURL = "https://bored-api.appbrewery.com"
const myURL = `${BaseURL}/random`;
//Generates Random facts

//QUERY Parameters
// BaseURL/Endpoint?query=value

//Multiple QUERY Parameters
// BaseURL/Endpoint?query=value&query2=value2...
const myQueryURL = `${BaseURL}/filter?type=social&participants=2`;

//PATH Parameters
// BaseURL/Endpoint/{path-parameter};
const myPathURL = `${myURL}/5914292`;
//Will find the object with this key parameter, if found will return complete object.




