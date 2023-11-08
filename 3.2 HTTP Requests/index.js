import express from "express";
const app = express();
const port = 4000;

// ENDPOINTS: /
// "localhost:3000 OR localhost:3000/" will return :- 
app.get("/" ,(req, res) => {
  // console.log(req.rawHeaders);
  // res.send("Hello, Vansh!")
  res.send("<h1>Hello Vansh</h1>");
})

// ENDPOINTS: /about
// localhost:3000/about" will return :-
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
})

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

// always hav to close server Ctrl+C and then after changes restart server using "node index.js" , which is a real draaaag..!!
// To avoid this situation professional developers use "NODEMON" node demon that automatically restart nod eapplication when file changes in the directory

//To Use Nodemon replace "node" with" nodemon"
//But first npm i -g nodemon (-g: globally download)
