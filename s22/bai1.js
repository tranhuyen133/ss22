var numbera = parseInt(prompt("Nhập a"));
var numberb = parseInt(prompt("Nhập b"));
if(numbera%numberb==0){
    console.log('a chia hết cho b');
}
else if(numberb%numbera==0){
    console.log('b chia hết cho a');
}
else{
    console.log('không hợp lệ');
}