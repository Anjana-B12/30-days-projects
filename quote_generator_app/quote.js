const api_url = "https://quoteslate.vercel.app/api/quotes/random";

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quoteText.innerHTML = data.quote;
    quoteAuthor.innerHTML = data.author;
}