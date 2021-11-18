let a = 1;
let b = 5;
let c = 10;
let d = 15;
function min4 (a,b,c,d) {
  if (a > b) {
    let less1 = b;
  }
  else {
    let less1 = a;
  }
  if (c > d) {
    let less2 = d;
  }
  else {
    let less2 = c;
  }
  if (less1 > less2) {
    let x = less2;
  }
  else {
   let x = less1;
  }
newmoy = a+b+c+d-x/3;
  console.log(newmoy);
}
min4();
