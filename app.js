let quotes = [
    "Chuck Norris can divide by zero.",
    "Chuck Norris doesn't climb trees. He just pulls them down and walks on top of them.",
    "When Chuck Norris falls in water, Chuck Norris doesn't get wet. Water gets Chuck Norris.",
    "What came first, the chicken or the egg? Chuck Norris came first.",
    "There is no theory of evolution. Just a list of creatures Chuck Norris has allowed to live.",
    "Chuck Norris is so fast, he can run around the world and punch himself in the back of the head.",
    "Chuck Norris doesn't wear a watch. He simply decides what time it is.",
    "When Chuck Norris does a push up, he isn't lifting himself up, he's pushing the Earth down.",
    "Chuck Norris sleeps with a night light. Not because Chuck Norris is afraid of the dark, but the dark is afraid of Chuck Norris.",
    "If you Google search 'Chuck Norris getting his ass kicked' you will generate zero results. It just doesn't happen."
];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function rdmQuote() {
    let quote = document.querySelector(".quote")
    quote.innerHTML = quotes[getRandomInt(quotes.length)]
}

let quote = document.querySelector(".quote")
quote.innerHTML = quotes[getRandomInt(quotes.length)]

function rdmColor(){
    color = {
        r: getRandomInt(255),
        g: getRandomInt(255),
        b: getRandomInt(255)
    }
    let bgColor = `rgb(${color.r}, ${color.g}, ${color.b})`
    
    let body = document.querySelector(".body")
    let section = document.querySelector(".quote")
    let author = document.querySelector(".author")
    body.style.backgroundColor = bgColor
    btn.style.backgroundColor = bgColor
    body.style.backgroundColor = bgColor
    section.style.color = bgColor
    author.style.color = bgColor
}

let btn = document.querySelector(".btn")
btn.addEventListener("click", rdmQuote)
btn.addEventListener("click", rdmColor)




