import express from "express";
const page = express();
const port = 3000;

page.get("/", (req, res) => {
    // JavScript getDay() method from W3 Schools
    const today = new Date();
    const day = today.getDay();
    // console.log(day) = 0 if SUN, 1 if MON, ___ so on
    
    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day === 0 || day === 6) {
        type = "a weekend";
        adv = "it's time to have fun";
    }

    res.render("index.ejs", {
        day: type,
        advice: adv,
    });
});

page.listen(port, () => {
   console.log(`Server running at ${port}`); 
});

