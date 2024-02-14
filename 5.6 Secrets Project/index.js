// 1. Import express and axios
import express from "express";
import axios from "axios";

// 2. Create an express app and set the port number.
const page = express();
const port = 3000;

// 3. Use the public folder for static files.
page.use(express.static("public"));

// 4. When the user goes to the home page it should render the index.ejs file.
page.get("/", async (req, res) => {
    
    // 5. Use axios to get a random secret and pass it to index.ejs to display the secret and the username of the secret.
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {
            secret: result.data.secret,
            user: result.data.username
        });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
})

// 6. Listen on your predefined port and start the server.
page.listen(port, () => {
    console.log(`Server running at port ${port}`);
})