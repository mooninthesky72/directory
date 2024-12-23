function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function spanDiv(sentence, classes, id) {
    const newsentence = sentence.split("");
    const divAboutToBeViolated = document.createElement("div");
    divAboutToBeViolated.classList = classes;
    divAboutToBeViolated.id = id;
    for(let i = 0; i < sentence.length; i++) {
        newspan = document.createElement("span");
        newspan.textContent = newsentence[i];
        divAboutToBeViolated.appendChild(newspan);
    }
    violatedDiv = divAboutToBeViolated
    document.body.appendChild(violatedDiv);
}
spanDiv("Moon Directory", "text-a transitions", "header");
spanDiv("All my projects! Yay!", "text-b", "subtext");

const header = document.getElementById("header");
const headerLetters = header.getElementsByTagName("span");
const subtext = document.getElementById("subtext");
const subtextLetters = subtext.getElementsByTagName("span");
const entriesDiv = document.getElementById("entries");
const entries = entriesDiv.children;
const container = document.getElementById("container");
const card = document.getElementById("card");
const line = document.getElementById("line");

let cardOn = false;
let cardGive = "";
let cardPos = "";

header.addEventListener("click", () => {
    location.reload();
})

header.addEventListener("mouseover", () => {
    header.style.letterSpacing = "5px";
    header.style.color = "lightpink";
})
header.addEventListener("mouseout", () => {
    header.style.letterSpacing = "3px";
    header.style.color = "rgb(255, 251, 170)";
})

for(let i = 0; i < headerLetters.length; i++) {
    headerLetters[i].style.filter = `brightness(0.${getRandomInt(6, 9)})`;
}
for (let i = 0; i < getRandomInt(0, 2); i++) {
    headerLetters[getRandomInt(0, (headerLetters.length - 1))].style.animation = `a1 ${String(getRandomInt(500, 800))}ms ${Math.random() < 0.5 ? "ease-in" : "ease-out"} both`;
}

for (let i = 0; i < subtextLetters.length; i++) {
    subtextLetters[i].style.animation = `tada 4s infinite ease ${(i+2)/10}s`;
}

to = [
    ["project-1", "example entry, real stuff coming soon i promise"],
    ["project-2", "i suck at coding i need to learn more and stuff"],
    ["project-3", "i literally have no flipping clue what im doing"],
    ["project-4", "meow"],
    ["project-5", "ughghghghhhghhhhhhh"],
    ["project-6", "i am bored"],
    //
]

function main() {
    for(let i = 0; i < entries.length; i++) {
        let el = entries[i];
        el.addEventListener("mouseover", () => {
            el.style.scale = 1.2;
            el.style.color = "lightpink";
            el.style.textDecoration = "underline";
            cardOn = true;
            cardPos = i + 1;
            cardGive = to[i][1];
        })
        el.addEventListener("mouseout", () => {
            el.style.scale = 1;
            el.style.color = "rgb(255, 251, 170)";
            el.style.textDecoration = "none";
            cardOn = false;
        })
        setTimeout(() => {
            el.style.visibility = "visible";
            el.style.opacity = "1";
        }, 1300 + (i * 100));
        setTimeout(() => {
            el.style.textIndent = "0.8rem"
        }, 1450 + (i * 100));
    }

    setTimeout(() => {
        container.style.height = "32rem";
        container.style.opacity = "1";
    }, 1000);
    setTimeout(() => {
        container.style.width = "16rem";
    }, 1150);

    setTimeout(() => {
        line.style.opacity = "0.6";
    }, 900);

    setInterval(() => {
        if(cardOn == true) {
            card.style.opacity = "1";
            card.innerHTML = cardGive;
            card.style.top = `${10+(2.37 * cardPos)}rem`
        }
        if(cardOn == false) {
            card.style.opacity = "0";
        }
    }, 13);
}
