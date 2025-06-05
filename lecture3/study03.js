//เจาะลึกArrow Function
let aa = () => {
  console.log("Hello......");
};

// คำสั่งใน () มีเพียง 1 คำสั่ง ไม่จำเป็นต้องใส่  ()
let bb = () => console.log("Hello....");

//----------------------------------------------
let cc = () => {
  return "wow wow wow";
};

// คำสั่งใน {} มีเพียง 1 คำสั่ง แลพเป็นคำสั่ง  return หากไม่ใส่ {} ก็ไม่ต้องใส่คำว่า return
let dd = () => "wow wow wow";

aa();
bb();
aa();
bb();
console.log(cc());
console.log(dd());
