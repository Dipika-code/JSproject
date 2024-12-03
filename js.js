
// let str="anonymous" ;
// console.log(str.charAt(1));


// let str1 ="anonymous" ;
// console.log(str1.charCodeAt('4'));

// let str3 ="anonymous" ;
// console.log(str3.indexOf('a'));


// let str3 ="anonymous" ;
//  console.log(str3.lastIndexOf('o'));

//  let str3 ="anonymous" ;
//  console.log(str3.strIndexOf('o'));


//  let str ="dipika";
//  console.log(str.indexOf('d'));

//  let str4 = "vishwakarma";
//  console.log(str.indexOf('w'));

//  let str="dipika" ;
//  console.log(str.lastIndexOf('p'));


//  let str="anonymous";
//  console.log(str.repeat(2));

// let str="     anonymous      7";
//  console.log(str.trim( ));


// let str="anonymous   7    .";
// console.log(str.trimEnd( ));


// let str="anonymous   7    .";
// console.log(str.trimStart( ));


// let str1 ="aNonYmous";
// console.log(str1.toUpperCase()[0]+ str1.slice(1,str1.length).toLowerCase());

// let str1 ="aNonYmous";
// console.log(str1.charAt(0) + str1.slice(1,str1.length).toLowerCase() );

// let name=prompt("enter the name");
// alert(name.toUpperCase()[0]+ name.slice(1,name.length).toLowerCase());

//  let  file=prompt("enter the file name");
//  let extension =(file.split('.')[1]);
//  if (extension==undefined)
//     alert('Please enter a valid file name')
// else{
//     alert(`${extension} is Extension of your file `)

// }



// let mail=prompt('Enter your Email');
// let case1=(mail.split('@'));
// if ((mail==case1) && (mail) ) 
// alert('please enter valid email with @');
// else {
//     alert(`${case1}you are logged in`);
// }

// let mail=prompt('Enter your Email');
// if (mail==" "){
//     alert('Plz enter your email');}
// else if(mail.includes('@')) {
//     alert('Plz enter valid email with @');}
// else if(mail.endsWith('@gmail.com')){
// alert('plz enter a valid email with @gmail.com')
// }
// else if(!(email.length >= 13)){
//     alert('Enter a valid email')
// }
// else 



// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let num=prompt('Enter the number');
// while(num<=prompt){
//     alert(num);
//     num++;
// }()
// let num1=prompt('Enter the number');
// let num2=prompt('enter the number')
// let str=' ';
// while(num1<=num2){
//     str += `${num1} `;
//     num1++;
   
// }
// alert(str.trimEnd());

// let num1=prompt('Enter the number');
// let num2=prompt('enter the number')
// let str=' ';
// do{
//     str += `${num1} `;
//      num1++;
        
// }while(num1<=num2)
//     alert(str.trimEnd());


// for(let num1=prompt('Enter the number')
// let num2=prompt('enter the number')
// let str=' ';(num1<=num2); num1++;){
//     str += `${num1} `;
//        num1++;

// }alert(str.trimEnd());


// let input1=Number(prompt('Enter the value 1'));
// let input2=Number(prompt('Enter the value 2'));
// if( isNaN(input1)||isNaN(input2)){
// alert('plz enter valid no.')
// }
// else{
//     let even=0;
//     let odd=0;

    
//     for(let i=input1;i<=input2;i++){
//         i%2===0 ? even++ : odd++;
//     }
//     alert(`Even Numbers:${even} \ nodd numbers:${odd}`)
// }

// let input1=Number(prompt('Enter the value 1'));
//  let input2=Number(prompt('Enter the value 2'));
 
//     if(isNaN(input1)||isNaN(input2)){
//         alert('plz enter a valid no.')
//     }
//     else{
//         let even=0;
//         let odd=0;

//         for(let i=input1;i<=input2;i++){
//             i%2==0 ? even++ : odd++;
//         }
//         alert(`even number:${even} \ odd number:${odd}`)
//     }



// let input1=prompt('Enter the value 1');
// let input2=prompt('Enter the value 2');
// for(let i=input1; i<=input2 ; i++)

//     if(i%2==0){
//         // alert(i + "This is even no.")

//     }
//     else{
//     let even=0;
//     let odd=0;

//     }


// let input1=prompt('Enter the value 1');
// let input2=prompt('Enter the value 2');
// if(i%2==0){
 
// }
// else{
//     let even=0;
//     let odd=0;
//     console.log()
// }


// for(let i=input1   )
// let input1=prompt('Enter the value 1')
// let input2=prompt('Enter the value 2')
// if(i%2==0){
// alert()

// }
// let value =true;
// let array =[2,true,'Rahul',4,5,NaN,false,'str',8];
// if(typeof array==Number||typeof array==bollean||typeof array==isNaN||typeof array=='string'){
//     console.log(value)
// }
// else{
//     let value=false;
//     let sum =0;
//     for(let i=0;i<array.length;i++){
    
//         sum += array[ i ];
    
//     }}
//     console.log('sum: ',value);


// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }

// let str1 = "racecar";
// let str2 = "nitin";
// let str3 = "Rama";

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));

// let str = prompt('Enter the palindrome value');
// function isPalindrome(str) {
//     let j = str.length - 1
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] != str[j]) {
//             return false;
//         }
//         j--;
//     }
//     return true;
// }
// // alert(str)
// let array =[2,true,'Rahul',4,5,NaN,false,'str',8];
//     let sum =0;
//     for(let i=0;i<array.length;i++){
//         sum += array[ i ];
//     }
//     console.log('sum: ',sum);

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
// let num =1998;
// let temp=num;
// let newNum =0;
// while(temp>0){
//     let digit = temp%10;
//     newNum = newNum*10 + digit;
//     temp = Math.trunc(temp/10);
// }
// if(newNum==num){
//     console.log(newNum ,'This is a palindrome number');
// }

// else console.log(newNum,'This is not a palindrome number' );
// let num =prompt('enter the number');
// let temp=num;
// let newNum =0;
// while(temp>0){
//     let digit = temp%10;
//     newNum = newNum*10 + digit;
//     temp = Math.trunc(temp/10);
// }
// if(newNum==num){
//     alert(newNum ,'This is a palindrome number');
// }

// else alert(newNum,'This is not a palindrome number' );
// program to check an Armstrong number of three digits

// let sum = 0;
// const number = prompt('Enter a three-digit positive integer: ');
// let temp = number;
// while (temp > 0) {
//     let remainder = temp % 10;

//     sum += remainder * remainder * remainder;
//     temp = parseInt(temp / 10); 
// }
// if (sum == number) {
//     console.log(`${number} is an Armstrong number`);
// }
// else {
//     console.log(`${number} is not an Armstrong number.`);
// }