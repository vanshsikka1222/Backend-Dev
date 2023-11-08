// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log (`Server started at ${port}`);
});

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
    res.sendStatus(201);
});

app.put("/user/vansh", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/vansh", (req, res) => {
    res.sendStatus(200);
});

app.delete("/user/vansh", (req, res) => {
    res.sendStatus(200);
});

