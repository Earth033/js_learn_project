//เรียกใช้งาน Module แบบ CommonJS
const { dataX, showwow } = require('./my-module01');
const {sumNumber} = require('./my-module02');
 
console.log(dataX);
showwow();
console.log(sumNumber(10, 20));