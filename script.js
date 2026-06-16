const lengthInput = document.getElementById('length');
const generateBtn = document.getElementById('generateBtn');
const passwordDisplay = document.getElementById('passwordDisplay');
const copyBtn = document.getElementById('copyBtn');
const copyIcon = document.getElementById('copyIcon');
const checkIcon = document.getElementById('checkIcon');

function generatePassword() {
    let password = "";
    let length = Number(lengthInput.value);
    const characters = [['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], 
                        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'], 
                        ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], 
                        ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', "\\", ']', '^', '_', '`', '{', '|', '}', '~']];

    if (isNaN(length)) {
        passwordDisplay.innerText = "Enter a valid number!";
        passwordDisplay.style.color = "#ef4444";
        return;
    }
    if (length < 1 || length > 100) {
        passwordDisplay.innerText = "Enter a number between 1 and 100";
        passwordDisplay.style.color = "#ef4444";
        return;        
    }

    while (length--) {
        let row = Math.floor(Math.random()*4);
        let col = Math.floor(Math.random()*characters[row].length);
        password += characters[row][col];
    }
    passwordDisplay.innerText = password;
}

copyBtn.addEventListener('click', async () => {
    const textToCopy = passwordDisplay.textContent;
    
     if (textToCopy === "" || textToCopy === "Enter a valid number!" || textToCopy === "Enter a number between 1 and 100") return; 

    await navigator.clipboard.writeText(textToCopy);

    copyIcon.style.display = 'none';
    checkIcon.style.display = 'block';

    setTimeout(() => {
        copyIcon.style.display = 'block';
        checkIcon.style.display = 'none';
    }, 1000);
});

generateBtn.addEventListener("click", generatePassword);
document.body.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        generatePassword();
    }
});

