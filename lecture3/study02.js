// function Expresstion การเชียนฟังชั่นในรูปของนิพจ

//1. Anonymus Function(ฟังชั่นไม่มีฃื่อ)
let aa = function () {
  console.log("Hello.....");
};

let bb = function (x, y) {
  return x + y;
};

aa();
aa();
console.log(bb(10, 20));

//2.Anonymus Function (ฟังฃั่นที่ใฃ้เครื่องหมาย =>)

let cc = () => {
  console.log("Hello.....");
};

let dd = (x, y) => {
  return x + y;
};
cc()
cc()
console.log(dd(10,20))