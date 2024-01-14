var a = parseInt(prompt("Nhập a"));
var b = parseInt(prompt("Nhập b"));
if(a=0){
    if(b=0){
        console.log('Phương trình vô sô nghiệm');
    }
    else{
        console.log('Phương trình vô nghiệm');
    }
}
else if (a!=0){
    console.log('Phương trình có nghiệm');
}
else{
    console.log('Phương trình không có nghiệm');
}