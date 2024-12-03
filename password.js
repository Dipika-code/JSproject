document.getElementById('generate').addEventListener('click', () => {
    let length = parseInt(document.getElementById('length').value);
    let includeLowercase = document.getElementById('lowercase');checked
    let includeUppercase = document.getElementById('uppercase');checked
    let includeSymbols = document.getElementById('symbols').checked;
    let includeNumbers = document.getElementById('numbers').checked;
    let includeresult = document.getElementById('result').checked;
    
   

    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    let numbers = '0123456789';
    

    let characters = '';
    if (includeLowercase) characters += lowercase.checked;
    if (includeUppercase) characters += uppercase.checked;
    if (includeSymbols) characters += symbols.checked;
    if (includeNumbers) characters += numbers.checked;

    if (characters == '' || isNaN(length)) {
        document.getElementById('result').innerText = 'Please select options and enter a valid length.';
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }


    document.getElementById('result').innerText = `Generated Password: ${password}`;
}

);