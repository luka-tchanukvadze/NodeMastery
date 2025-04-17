// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(3, 5));

// exports
// const cacl2 = require("./test-module-2");
// console.log(cacl2.add(2, 5));
const { add, multiply } = require("./test-module-2");
console.log(add(2, 5));
