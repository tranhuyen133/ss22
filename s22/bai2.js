var a = parseInt(prompt("Nhập cạnh a"));
var b = parseInt(prompt("Nhập cạnh b"));
var c = parseInt(prompt("Nhập cạnh c"));
if((a+b)>c){
    console.log('Độ dài cạnh hợp lệ');
}
else if((b+c)>a){
    console.log('Độ dài cạnh hợp lệ');
}else if((c+a)>b){
    console.log('Độ dài cạnh hợp lệ')
}else{
    console.log('Độ dài cạnh không hợp lệ');
}
    