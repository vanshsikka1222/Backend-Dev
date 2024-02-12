import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "vansh";
const yourPassword = "12221223";
const yourAPIKey = "5e1df9f6-04c8-4e57-94ad-cef4fc741287";
const yourBearerToken = "91f7c907-4248-4551-ac15-1dcd9a5d0752";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Using JSON.stringify to turn the JS object from axios into a string.
  try {
    const result = await axios.get(API_URL + "/random");
    res.render("index.ejs", {content: JSON.stringify(result.data)});
  } catch(error) {
    res.status(404).send("Error", error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  // https://stackoverflow.com/a/74632908
   try {
    const result = await axios.get(API_URL + "/all?page=2", {
      auth: {
        username: "vansh",
        password: "12221223",
      },
    });
    res.render("index.ejs", {content: JSON.stringify(result.data)});
   } catch(error) {
    res.status(404).send("Error", error.message);
   }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //You need to provide a query parameter of apiKey in the request.
  try {
    const result = await axios.get(API_URL + "/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(result.data)});
   } catch(error) {
    res.status(404).send("Error", error.message);
   }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  // https://stackoverflow.com/a/52645402
  const config = {
    headers: {Authorization: `Bearer ${yourBearerToken}`}
  }
  
  try {
    const result = await axios.get(API_URL + "/secrets/2", config);
    res.render("index.ejs", {content: JSON.stringify(result.data)});
   } catch(error) {
    res.status(404).send("Error", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
