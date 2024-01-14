var number1 = parseInt(prompt("Nhập sô thứ nhất"));
var number2 = parseInt(prompt("Nhập sô thứ hai"));
const total = number1 + number2 ;
if(number1>0&&number2
    <0){
    total = number1 + number2;
    console.log('Phép tính hợp lệ');
}else if(number1<0&&number2>0){
    total = number2 + number1;
    console.log('Phép tính hợp lệ');
}else{
    console.log('Phép tính không hợp lệ')
}