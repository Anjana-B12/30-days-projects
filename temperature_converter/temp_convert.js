const tempInput = document.querySelector("#temp_input");
const tempOptions = document.querySelector("#options");
const tempConvertBtn = document.querySelector("#convert");
const tempAnswer = document.querySelector(".answer");

tempConvertBtn.addEventListener("click", () => {
    const tempValue = tempInput.value;

    if(tempValue === "") {
        tempAnswer.textContent = `Fill the value first`;
        return;
    }

    const value = parseFloat(tempValue);
    const selectedOption = tempOptions.value;

    if(selectedOption === "celsius") {
        let ans = ((value - 32) * 5/9);
        tempAnswer.textContent = `Answer is ${ans.toFixed(2)}°C`;
    } else {
        let ans = ((value * 9/5)+32);
        tempAnswer.textContent = `Answer is ${ans.toFixed(2)}°F`;
    }
});