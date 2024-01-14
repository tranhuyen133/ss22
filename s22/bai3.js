let number = parseInt(prompt("Nhập số:"));
for (let i = 0 ;i < number ; i++ ){
    let a = Math.sqrt(number);
    if (a  == i){
        console.log('so chinh phuong')
    }
    else{
        console.log(' khong phai so chinh phuong') 
    }
}