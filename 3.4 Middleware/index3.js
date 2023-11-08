// Custom Middleware
import express from "express";

const app = express();
const port = 3000;

// Creating our own Middleware:
function logger(req, res, next) {
  console.log("Request Method: ", req.method); //GET, POST...!
  console.log("Request URL: ", req.url); // "/"
  // "next() keyword" Determines when should we move from middleware and continue with flow of server handlers.. (return) in code lang.
  next();
}

// Using Middleware (logger)
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
