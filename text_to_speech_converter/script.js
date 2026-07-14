const text = document.getElementById("text");
const speakBtn = document.getElementById("speakBtn");
const stopBtn = document.getElementById("stopBtn");

speakBtn.addEventListener("click", () => {
    const message = text.value.trim();

    if(message === "") {
        alert("Please Enter some text.");
        return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message);

    utterance.lang = "en-US";
    utterance.pitch = 1;
    utterance.volume = 1;
    utterance.rate = 1;

    utterance.onstart = () => {
        console.log("Speech Started");
    }

    utterance.onend = () => {
        console.log("Speech Ended");
    }

    utterance.onerror = (event) => {
        console.error("Speech Error: ", event.error);
    }

    speechSynthesis.speak(utterance);
});

stopBtn.addEventListener("click", () => {
    speechSynthesis.cancel();
});