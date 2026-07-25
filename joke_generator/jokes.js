const BtnJoke = document.querySelector(".jokeBtn");
const joke1 = document.querySelector("#jokePart1");
const joke2 = document.querySelector("#jokePart2");
const URL = "https://official-joke-api.appspot.com/random_joke";

const fadeInJoke = () => {
    joke1.classList.remove("show");
    joke2.classList.remove("show");

    void joke1.offsetWidth;

// Browsers optimize a LOT.
// If you remove .show and immediately add .show, the browser often thinks:
// “Oh, these two actions cancel each other out — no need to animate.”
// So the animation NEVER plays.

// By accessing .offsetWidth, we force the browser to:

// recalculate layout
// flush pending style changes
// restart the transition system

// This hack is called forcing a reflow.

    joke1.classList.add("show");
    joke2.classList.add("show");
}

const getJoke = async () => {
    BtnJoke.disabled = true;
    BtnJoke.innerText = "Loading...";

    try {
        let response = await fetch(URL);

        if(!response.ok) {
            throw new Error("Joke not Found");
        }

        let data = await response.json();
        joke1.innerText = data.setup;
        joke2.innerText = data.punchline;
    }
    catch(error) {
        joke1.innerText = "Failed to load a Joke 🥲";
        joke2.innerText = "Check your Internet Connection 😑";
    }
    finally {
        BtnJoke.disabled = false;
        BtnJoke.innerText = "Generate another Joke";
    }
    fadeInJoke();
};

BtnJoke.addEventListener("click", getJoke);