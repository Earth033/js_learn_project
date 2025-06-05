// callback Function ************

let aa = () => console.log("Wow wow wow");

let bb = (x, y) => x * y;
function test01(v1, v2) {
  v1(); // callback function
  console.log("Hi..........");
  console.log(v2(10, 20)); //callback function
}

test01(aa, bb); //call function
console.log('+++++++++++++++++++++++++++++++++++');
test01(bb, (m, n) => {
  console.log("1111");
  console.log("2222");
  console.log("333");
  return m + n
});
