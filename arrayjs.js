// let array =[2,true,'Rahul',4,5,NaN,false,'str',8];
//     let sum =0;
//     for(let i=0;i<array.length;i++){
//         sum += array[ i ];
//     }
//     console.log('sum: ',sum);
// 

// function isPalindrome(str) {
//         let j = str.length - 1
//         for (let i = 0; i >=0 / 2; i++) {
//             if (str[i] != str[j]) {
//                 return false;
//             }
//             j--;
//         }
//         return true;
//     }
// let userInput = prompt("Enter a string to check if it's a palindrome:");
// if (userInput) {
//     if (isPalindrome(userInput)) {
//         function isPalindrome(str) {
//             let j = str.length - 1
//             for (let i = 0; i < str.length / 2; i++) {
//                 if (str[i] != str[j]) {
//                 }
//             return true;
//         }
//         alert("The string is a palindrome.");}
//     } 
//     else{
//         alert("The string is not a palindrome.");
    
//     }
// } else {
//     alert("You didn't enter anything.");
// }

// let string='naman';
//     function isPalindrome(str){
//         let left=0;
//         let rigth=str.length-1;
//         while(left<rigth){
//             if(str(left)!==str(rigth)){
//                 return false;
//             }
//             left++;
//             rigth--;
//         }
//         return true;
//     }
// console.log(isPalindrome(string));
// const str = prompt('Enter the string');
// let len=str.length;
// let newString ="";

// for(let i= len-1;i>=0;i--){
//     newString += str.at(i);
// }
// if(newString == str) 
//     alert('String is Palindrome');
// else alert('String is not Palindrome') ;



// let num =1875;
// let temp=num;
// let newNum =0;
// while(temp>0){
//     let digit = temp%10;
//     newNum = newNum*10 + digit;
//     temp = Math.trunc(temp/10);
// }
// console.log(newNum);
// console.log(num);

// let num =prompt('enter the number');
// let temp=num;
// let newNum =0;
// while(temp>0){
//     let digit = temp%10;
//     newNum = newNum*10 + digit;
//     temp = Math.trunc(temp/10);
// }
// if(newNum==num){
//     alert('This is a palindrome number');
// }

// else {alert('This is not a palindrome number' 

// )};
// 
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

// let number =Number(prompt('Enter the number'));
// let temp=num;
// let power=0;
// while(temp>0){
//     temp=Math.floor(temp/10);
//     power++;
// }
// temp = num;
// let newNum = 0;
// while(temp>0){
//     let digit=temp%10;
//     newNum +=Math.pow(digit,power);
//     temp=Math.floor(temp/10);
// }
// if(num == newNum){
//     alert(`${newNum} is an armstrong number`);
// }
// else{
//     alert(`${newNum} is not an armstrong number`);
// }

// let row=Number(prompt('Enter the value'));
// for(let i=1;i<=row;i++){
//     let str='';
//     for(let j=1;j<=row;j++){
//         str +='*';
//     }
// }
// alert(str);