// Passing Data from EJS -> SERVER
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const n = req.body["fName"].length + req.body["lName"].length;
  // console.log(n);
  res.render("index.ejs", {
    length: n,
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
