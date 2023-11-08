// Logging type of Middleware (Most Commonly used)
import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

// Predefined formats can be used of morgan : combined, common, dev, short, tiny..!!
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
