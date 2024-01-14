var year = parseInt(prompt("Nhập năm"));

if(year%400 == 0){
    console.log('Năm nhuận');
}
else if(year%4 == 0 && year%100 != 0) {
    console.log('Năm nhuận');
}else{
    console.log('Năm không phải năm nhuận');
}