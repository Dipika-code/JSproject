// let arm = 0;
// const number = Number(prompt('Enter the numbers with positive integer: '));
// let temp = number;
// while (temp > 0) {
//     let remainder = temp % 10;

//     arm += remainder *remainder*remainder;
//     temp = parseInt(temp / 10); 
// }
// if (arm == number) {
//     alert(`${number} is an Armstrong number`);
// }
// else {
//     alert(`${number} is not an Armstrong number.`);
// }

let num =Number(prompt('Enter the number'));
let temp=num;
let power=0;
while(temp>0){
    temp=Math.floor(temp/10);
    power++;
}
temp = num;
let newNum = 0;
while(temp>0){
    let digit=temp%10;
    newNum +=Math.pow(digit,power);
    temp=Math.floor(temp/10);

if(num == newNum){
    alert(`${num} is an armstrong number`);
}
else{
    alert(`${num} is not an armstrong number`);
}}