const container = document.getElementById("joke");
const authorText = document.getElementById("author");
const btn = document.getElementById("btn");
const url = "https://animechan.vercel.app/api/random";


let getAnime = () => {
    btn.innerText = "Loading Quote...";
    fetch(url)
    .then(response => response.json())
    .then(response => {
        container.textContent = response.quote;
        authorText.textContent = response.character;
        btn.innerText = "New Quote";
    })
}

getAnime();
btn.addEventListener("click", () => {
    getAnime();
})
