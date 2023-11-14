import express from "express";

const app = express();
const port = 3000;

/* Write your code here:
Step 1: Render the home page "/" index.ejs
Step 2: Make sure that static files are linked to and the CSS shows up.
Step 3: Add the routes to handle the render of the about and contact pages.
  Hint: Check the nav bar in the header.ejs to see the button hrefs
Step 4: Add the partials to the about and contact pages to show the header and footer on those pages. */

// Step1
app.get("/", (req,res) => {
  res.render("index.ejs");
});

// Step2 
// The files that are completely STATIC like (img, css).. are stored in "public" folder and added using MIDDLEWARE- express.static : 
app.use(express.static("public")); // "source"

// Step3
app.get("/about", (req,res) => {
  res.render("about.ejs");
});

app.get("/contact", (req,res) => {
  res.render("contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
