// let row=prompt('Enter the value');
// let str= '';
// for(let i=1;i<=row;i++){
//     // let str= '';
//     for(let col=1;col<=row;col++){
//         str +='*';
//     }
// // console.log();
// str+='\n';
// }
// console.log(str)

// let row =prompt('Enter the value');     //right angle triangle with astrike
// let str='';
// for(let i=1;i<=row;i++){
//     for(let j=1; j<=i;j++){

    
//         str +='*';
//     }

// str += "\n";
// }
// console.log(str);


// let rows = 5;      //right angle triangle numbers
// let pattern = "";
// for (let n = 1; n <= rows; n++) {
//    for (let num = 1; num <= n; num++) {
//       pattern += num;
//    }
//    pattern += "\n";
// }
// console.log(pattern);


// let row = prompt('Enter the value');      //opposite right angle triangle
// let str ='';
// for(let i=row;i>=1;i--){
//     for(let k=1; k<=i;k++){
//         str +=' ';
//     }
//     for(let j=row;j>i;j--){
//         str +='*';
//     }
// str += "\n";
// }

// console.log(str);

// let rows = prompt("Enter the number of rows for the pyramid:");     //pyramid pattern
// for (let i = 1; i <= rows; i++) {
//   let str = "";
//   for (let j = 1; j <= rows - i; j++) {
//       str += " ";
//   }
//   for (let k = 1; k <= (2 * i - 1); k++) {
//       str += "*";
//   }
//   console.log(str);
// }

// let rows = prompt("Enter the number of rows for the pyramid:");    //opposite pyramid pattern
// for (let i = rows; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= rows - i; j++) {
//         row += " ";  
//     }
//     for (let k = 1; k <= (2 * i - 1); k++) {
//         row += "*"; 
//     }
//     console.log(row);
// }

// let size = prompt("Enter the size of the square:");     //borderd square pattern (hollow square)
// // let size=5;
//  let str = "";
// for (let i = 1; i <= size; i++) {
   

    for (let j = 1; j <= size; j++) {
      
        if (i === 1 || i === size || j === 1 || j === size) {
            str += "*";  
        } else {
            str += " ";  
        }

    }
    str +='\n';
}
console.log(str);

// let rows = prompt("Enter the number of rows for the triangle:");     //downward right angle triangle pattern
// for (let i = rows; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";  
//     }
//     console.log(row);
// }