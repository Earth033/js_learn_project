//loop สำหรับ Arry และ object
const arr = [10, 20, 30, 40];

arr.forEach((xx) => {
  console.log(xx * 100);
});

console.log('---------------');

const obj = {
  name: "John",
  age: 20,
  city: "New york"
};

for (let yy in obj) {
  console.log(obj[yy]);
}
