const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////
//FILES
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
        d,
      );
    });
  });
});

///////////////////////////
//SERVER
const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is the overview");
  } else if (pathName === "/product") {
    res.end("this is the product");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>page not found!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});
