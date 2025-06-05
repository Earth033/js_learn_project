//Function คือ จะไม่ทำงาน ถ้าไม่ถูกเรียกใฃ้ *****
//  มี4 ประเภท
//1. no parameter, no returm
function saufunc1() {
  console.log("Wow......");
}
//2. have parameter, no return
function saufunc2(aa, bb) {
  console.log(aa);
  console.log(bb);
}
//3. no parameter, has
function saufunc3() {
  console.log("wow.....");
  return 123456;
}
//4. have parameter, has return
function saufunc4(aa, bb, cc, dd) {
  return aa + bb + cc + dd;
}
//********************************
saufunc1();
saufunc1();
saufunc2(10, 20); //ข้อมูลที่ส่งให้พารามิเตอร์ Argment
saufunc2(9, 10);
saufunc1();
//*************************
let x1 = saufunc3();
console.log(saufunc3());
const x2 = saufunc4(10, 20, 30, 40);
console.log(saufunc4(11, 22, 33, 44));
console.log(`x1 : $(x1)`);
console.log(`x2 : $(x2)`);
