let arr =[];
let size =Number(prompt('Enter the Size of array'));


for(let i=0;i<size;i++){
    arr [i]= Number(prompt('enter the array values'));
}
// console.log(arr);
let max = -Infinity , min = Infinity;

for(let i=0;i<size;i++){
    if(arr[i]>max) max =arr[i];
    if(arr[i]<min) min =arr[i];
}
alert(`min = ${min} , max = ${max}`);