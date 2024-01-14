var month = parseInt(prompt("Nhập tháng "));
var year = parseInt(prompt("Nhập năm"));
switch(month){
    case 1:
    case 3 :
    case 5:
    case 7 :
    case 8 :
    case 10:
    case 12:
        console.log('có 31 ngày');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('có 30 ngày');
        break;
    case 2 :
            if((year%4 == 0 && year%100 != 0)||(year%400==0)){
                console.log('có 29 ngày');
            }else{
                console.log ('co 28 ngày');
            }
            break;
    default:
        console.log('nhập dữ liệu sai');
        break;      
}