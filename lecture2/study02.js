//ตัวแปรใน JavaScript สร้างได้ 3 แบบ
// 1. var แก้ไขได้ กำหนดค่าที่หัลงได้ เป็น Global
var aa = 10;
var xx;
xx = 100; // สามารถเปลี่ยนแปลงค่าได้

// 2. let แก้ไขได้กำหนดค่าที่หัลงได้ เป็น local
let bb = 20;
let yy;
yy = 200; // สามารถเปลี่ยนแปลงค่าได้ เป็น local

// 3. const แก้ไขไม่ได้ กำหนดค่าที่หลังไม่ได้ ต้องกำหนดค่าเลย
const cc = 30;
// const zz; Error

//-------------------------------------
{
  var a = 10; // Global
  let b = 20; // Local
  const c = 30; // Local
  {
    var d = 40; // Global
    let e = 50; // Local
    const f = 60; // Local
    {
      var g = 70; // Global
      let h = 80; // Local
      const i = 90; // Local
    }
    console.log(b); // 10
    console.log(e); // 20
    console.log(h); // 30
  }
}
console.log(a); // 10
console.log(b); // 10
console.log(g); // 10
