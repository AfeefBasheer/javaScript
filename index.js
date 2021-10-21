function calculator(number1,number2,number3){

    if(number3==1){return +number1+ +number2}
    else if(number3==2){return +number1- +number2}
    else if(number3==3){return +number1* +number2}
    else if(number3==4){return +number1/ +number2}
}

let sum=calculator(document.getElementById('number1').value,
document.getElementById('number2').
value,document.getElementById('number3').value);

document.write(sum);