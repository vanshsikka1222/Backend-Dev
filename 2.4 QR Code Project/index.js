// TO-DO
// using import change to ECMA script (modules) in package.json
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// 1. Use the inquirer npm package to get user input.
inquirer
  .prompt([
    {
      /* Pass your questions in here */
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    const url = answers.URL;
    
    // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    // Creating QR image out of "url"
    var qr_svg = qr.image(url);
    // Storing image in File System na,ed "qr_img.png"
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    // 3. Create a txt file to save the user input using the native fs node module.
    // Writing URL in URL.txt file
    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });
