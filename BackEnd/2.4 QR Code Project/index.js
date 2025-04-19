/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const question = [
  {
    type: "input",
    name: "url",
    message: "Enter a URL code: ",
    default: "www.google.com",
  },
];

inquirer.prompt(question).then((answer) => {
  fs.writeFile("URL.txt", answer.url, (err) => {
    if (err) throw err;
    console.log("The url has been generated!");
  });
  var qr_png = qr.image(answer.url, { type: "png", size: 7 });
  qr_png.pipe(fs.createWriteStream("qr_img.png"));
});
