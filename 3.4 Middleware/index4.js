// PROJECT : BAND NAME Generator
import express from "express";
// Importing Pre-Processor MiddleWare : body-parser
import bodyParser from "body-parser";

// Generating filePathURL dynamically
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

// using body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// generating CUSTOM Middleware
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

// using CUSTOM Middleware : bandNameGenerator
app.use(bandNameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
