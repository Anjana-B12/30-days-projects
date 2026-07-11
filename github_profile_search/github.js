const input = document.getElementById("username");
const submitBtn = document.getElementById("Btn");
const result = document.querySelector(".result");
const resultName = document.querySelector(".owner");
const Followers = document.querySelector(".followers");
const Following = document.querySelector(".following");
const Repos = document.querySelector(".repos");
const avatar = document.getElementById("avatar");

const url = "https://api.github.com/users/";

submitBtn.addEventListener("click", getUser);

input.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        getUser();
    }
});

async function getUser() {
    if(input.value === "") {
        result.style.color = "red";
        result.textContent = "Enter a Username!!";
        return;
    }

    const username = input.value.trim();

    const finalUrl = `${url}${username}`;

    let response = await fetch(finalUrl);

    if(!response.ok) {
        result.style.color = "red";
        result.textContent = "User not Found!!";
        return;
    }

    let answer = await response.json();
    result.style.visibility = "visible";
    avatar.src = answer.avatar_url;
    avatar.style.display = "block";
    resultName.textContent = `Username: ${answer.login}`;
    Followers.textContent = `Followers: ${answer.followers}`;
    Following.textContent = `Following: ${answer.following}`;
    Repos.textContent = `Repositories: ${answer.public_repos}`;
    input.value = "";
}