citations = [
    "Chuck Norris sait parler le braille.",
    "Chuck Norris fait pleurer les oignons.",
    "Chuck Norris peut claquer des doigts de pied.",
    "Chuck Norris peut cultiver un champ magnétique.",
    "Chuck Norris ne s'est jamais rendu à l'école. Chuck Norris ne se rend jamais.",
    "Chuck Norris peut faire du feu en frottant deux glaçons.",
    "Jésus Christ est né en 1940 avant Chuck Norris.",
    "Chuck Norris peut faire travailler un fonctionnaire.",
    "Chuck Norris joue à la roulette russe avec un chargeur plein.",
    "Selon certaines sources, il y aurait un spermatozoïde de Chuck Norris dans un lac écossais..."  
]
let btn = document.querySelector("#btn");
btn.addEventListener("click", changeColor);
btn.addEventListener("click", changeQuote);

let auteur = document.querySelector("#auteur");
let citation = document.querySelector("#citation");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function changeColor(){
    color = {
        c1: getRandomInt(256),
        c2: getRandomInt(256),
        c3: getRandomInt(256)
    }
    let colorrgb = `rgb(${color.c1}, ${color.c2}, ${color.c3})`
    document.body.style.background = colorrgb
    citation.style.color = colorrgb
    auteur.style.color = colorrgb
    btn.style.background = colorrgb
}
function changeQuote() {
    let citation = document.querySelector("#citation")
    citation.innerHTML = citations[getRandomInt(citations.length)]
}