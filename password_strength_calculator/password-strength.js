const Btn = document.getElementById("btn");
const password = document.getElementById("pass");
const Result = document.querySelector(".result p");

function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

function isNumber(num) {
    return /[0-9]/.test(num);
}

Btn.addEventListener("click", (e) => {
    e.preventDefault();
    let txt = password.value.trim();
    let letters = 0;
    let numbers = 0;
    let specialChars = 0;

    if(txt.length > 7) {
        for(let i = 0; i < txt.length; i++) {
            const ch = txt.charAt(i);
            if (isNumber(ch)) {
                numbers++;
            } else if (isLetter(ch)) {
                letters++;
            } else {
                specialChars++;
            } 
        }
        if (letters < 3) {
            Result.style.color = "red";
            Result.textContent = "Try to use atleast 3 letters for better password Strength!";
        } else if(numbers < 2) {
            Result.style.color = "orange";
            Result.textContent = "Password strength is 55%. Use atleast 2 Numbers!";
        } else if (specialChars < 3) {
            Result.style.color = "blue";
            Result.textContent = "Password Strength is 75%. Use atleast 3 Special Characters!";
        } else {
            Result.style.color = "green";
            Result.textContent = "password Strength is 95%.";
        }
    } else {
        Result.style.color = "red";
        Result.textContent = "Password Strength is just 25%. Password length should be more than 7!";
    }
    password.value = "";
});