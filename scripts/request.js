const anime = document.querySelector("#anime");
const character = document.querySelector("#character");
const quote = document.querySelector("#quote");
const btn = document.querySelector("btn");

btn.addEventListener("click", getQuote);

function getQuote(){
    fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json())
    .then(data => {
        anime.innerHTML = `${data.anime}
            `;
        character.innerHTML = ` - ${data.character}`;
        quote.innerHTML =` "${data.quote}"`;
    })
}