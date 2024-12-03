// document.getElementById('generate').addEventListener('click', () => {
//     const length = parseInt(document.getElementById('length').value);
//     const includeLowercase = document.getElementById('lowercase').checked;
//     const includeUppercase = document.getElementById('uppercase').checked;
//     const includeSymbols = document.getElementById('symbols').checked;
//     const includeNumbers = document.getElementById('numbers').checked;

//     const lowercase = 'abcdefghijklmnopqrstuvwxyz';
//     const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
//     const numbers = '0123456789';

//     let characters = '';
//     if (includeLowercase) characters += lowercase;
//     if (includeUppercase) characters += uppercase;
//     if (includeSymbols) characters += symbols;
//     if (includeNumbers) characters += numbers;

//     if (characters === '' || isNaN(length)) {
//         document.getElementById('result').innerText = 'Please select options and enter a valid length.';
//         return;
//     }

//     let password = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         password += characters[randomIndex];
//     }

//     document.getElementById('result').innerText =  Generated Password: ${password};
// });