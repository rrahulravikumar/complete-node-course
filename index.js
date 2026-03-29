const fs = require("fs");
// blocking synchronous way
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
const textOut = `This is what we know about the avacado: b${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync("./txt/input.txt", textOut);
console.log("File written successfully");

// non-blocking asynchronous way
fs.readFile("../1-node-farm/txt/start.txt", "utf-8", (err, data1) => {
  if (err) return console.log("ERROR");
  fs.readFile(`../1-node-farm/txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2);
    fs.readFile("../1-node-farm/txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3);
      fs.writeFile(
        "../1-node-farm/txt/final.txt",
        `${data2}\n${data3}`,
        "utf-8",
        (err) => {
          console.log("your file has been written");
        },
      );
    });
  });
});
