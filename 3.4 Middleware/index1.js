import express from "express";
//Import Body-Parser MiddleWare
import bodyParser from "body-parser";

// Generating Directory Path to URL Dynamically
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Using BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// Now after this code line we can use "req.body"

// Sending File
app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html");
  // C:\Users\DELL\Desktop\Backend\3.4 Middleware/public/index.html
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
