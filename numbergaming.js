// function startGame() {
//     let randomNumber = Math.floor(Math.random() * 100) + 1; 
//     let attempts = 0;
//     let isCorrect = false; 
//     const message = document.getElementById("message");
//     message.textContent = ""; 

//     while (!isCorrect) {
//       const userGuess = parseInt(prompt("Enter your guess (1-100):"));

//       if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         alert("Invalid input! Please enter a number between 1 and 100.");
//         continue;
//       }

//       attempts++;

//       if (userGuess === randomNumber) {
//         alert(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`);
//         isCorrect = true;
//       } else if (userGuess > randomNumber) {
//         alert("Too high! Try again.");
//       } else {
//         alert("Too low! Try again.");
//       }
//     }

//     message.textContent = (`You guessed the number ${randomNumber} in ${attempts} attempts! Refresh to play again.`);
//   }



const minNum =1;
const maxNum=100;
// let answer=Math.ceil(Math.random()*100);
let answer= Math.floor(Math.random()*100)+1;

let attempts =0;
let guess;
let isCorrect =true;
while(isCorrect){
    guess=Number(prompt('Enter the guess number between 1 to 100!'));
    if(isNaN(guess)){
        alert(`plz enter a valid number`);
    }
    else if(guess<minNum||guess>maxNum){
        
        alert(`plz enter a valid number`);
    }
    else{
        attempts++;
        if(guess<answer){

            alert('TOO LOW! TRY AGAIN!');
        }
        else if (guess>answer){
            alert('TOO HIGH! TRY AGAIN!');

        }
        else{
            alert(`Congratulations! You guessed the number ${answer} in ${attempts} attempts.`);
            isCorrect =false ;
        }
    }
}