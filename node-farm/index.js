const fs = require("fs");

const text = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(text);

const textOut = `This is what we know about the avocado: ${text}\nCreated on ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);
