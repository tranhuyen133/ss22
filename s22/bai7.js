var a = parseInt (prompt("Nhập a"));
var b = parseInt(prompt("Nhập b"));
var c = parseInt(prompt("Nhập c"));
var x1,x2;
const delta = parseFloat ("b*b-4*a*c");
if(delta<0){
    x1=(-b+Math.sqrt(delta)) / (2*a);
    x2=(-b-Math.sqrt(delta))/(2*a);
    console.log('Phương trình có hai nghiệm');
}else if(delta==0){
    x1=x2=-b/(2*a);
    console.log('Phương trình co nghiem kép');
}else {
    console.log('Phương trình vô nghiệm');
}