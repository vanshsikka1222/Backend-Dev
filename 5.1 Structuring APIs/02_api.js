//Introduction to json (Javascript Object Notation)

//Diff between JSON & JS objects :Keys are Strings in JSON
/* JSON
{
    "name": "Jack",
    "age": 48,
    "city": "USA",
    "education": [
        {
            "degree": "Btech",
            "college": "GNDU",
        }
    ]
}
*/

/* JS Object 
const jack = {
    name: "Jack",
    age: 48,
    city: "USA",
};
*/

//To Send data from ur Server to some other:
//Convert JS Object to json and then send

//JS Obj --> JSON:
const jsonData = JSON.stringify(data); //data = JS Object

//JSON --> JS Object:
const data = JSON.parse(jsonData); //jsonData = JSON





