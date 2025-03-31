const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////////////////////////////////////// FILES

// Blocking, synchronous way
// const text = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(text);
// const textOut = `This is what we know about the avocado: ${text}\nCreated on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);

// Non-blocking, asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERROR!");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);

//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("file has been written");
//       });
//     });
//   });
// });

//////////////////////////////////////////////////////////////// SERVER

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("this is overview");
  } else if (pathName === "/product") {
    res.end("this is the product");
  } else if (pathName === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
      const productData = JSON.parse();
      res.writeHead(200, { "Content-type": "application/json" });

      res.end(data);
    });
  } else {
    res.end("Page not found!");
  }
  res.writeHead(404, {
    "Content-type": "text/html",
  });
  res.end("<h1>hello from the server!</h1>");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
