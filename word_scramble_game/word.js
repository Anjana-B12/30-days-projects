const words = [
    "React",
    "Bootstrap",
    "MongoDB",
    "Javascript",
    "Angular"
];

const hints = [
    "Javascript Framework",
    "Styling Library",
    "Database Tool",
    "Scripting Language",
    "Javascript Framework"
];

function shuffle(str) {
    let strArray = Array.from(str);
    for(let i = 0; i < strArray.length; ++i) {
        let j = Math.floor(Math.random() * strArray.length);

        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }

    return strArray.join("");
}

let displayWord = "";
let displayHint = "";

function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("result");

    if(input.value.trim().toLowerCase() === displayWord.toLowerCase()) {
        output.innerHTML = "Result: Correct!";
    } else {
        output.innerHTML = "Result: Incorect!";
    }
    input.value = "";
}

function refresh() {
    let index = Math.floor(Math.random() * words.length);
    displayWord = words[index];
    displayHint = hints[index];

    let scrambledWord = document.getElementById("scrambled-word");
    scrambledWord.innerText = shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
    document.getElementById("result").innerText = "Result:";
}

refresh();