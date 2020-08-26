/***** Deliverable 1 *****/
const header = document.querySelector("h1#header")
console.log(`Here's your header: ${header}`)


/***** Deliverable 2 *****/
header.style.color="red"

/***** Deliverable 3 *****/
// console.log("PLAYERS array looks like this:", PLAYERS)
// const container = document.querySelector("div")
// listElement = document.createElement('ul')
// container.appendChild(listElement)

function makeList() {
    PLAYERS.forEach(function(player) {
        let div = document.createElement('div')
        div.className += `${player.name}`
        div.dataset.number = `${player.number}`
        div.innerHTML += `<h3>${player.name}  (<em>${player.nickname}</em>)<h3><br><img src="${player.photo}" alt="${player.name}">`
        document.querySelector("body").appendChild(div)
    });
}

makeList()

/***** Deliverable 4 *****/
let player = document.querySelector("[data-number='7']")
player.remove()