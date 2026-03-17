const fs = require("fs");
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
const textOut = `This is what we know about the avacado: b${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/input.txt", textOut);
console.log("File written successfully");
