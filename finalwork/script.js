var socket = io()

var side = 5;



function setup() {
    noStroke()
    frameRate(5);
    createCanvas(120 * side, 120 * side);
    background('#acacac');
}

let colors = ["#85C88A", "#357C3C", "#FFC300", "#B33030", "#85C88A", "white", "#85586F", "#2F58CD"]
let summer = ["#85C88A", "#056a04", "#FFC300", "#B33030", "#85C88A", "white", "#85586F", "#2F58CD"]
let spring = ["#85C88A", "#057f04", "#FFC300", "#B33030", "#85C88A", "white", "#85586F", "#0509f5"]
let autumn = ["#5f6765", "#5f8f65", "#FFC300", "#B33030", "#5f6765", "white", "#85C88A", "#2465e8"]
let winter = ["gray", "#aa9c67", "#FFC300", "#B33030", "gray", "white", "#85C88A", "#2465e8"]

let stateBaner = document.getElementById("state")

function draww(matrix,state) {
    let {
        grass,
        grassEater,
        predator, 
        garnuk,
        water,
        cankapat, 
    } = state

    stateBaner.innerText = "grass : " + grass + "\ngrassEater : " + grassEater + "\npredator : " + predator + "\ngarnuk : " + garnuk  + "\nwater : " + water + "\ncankapat : " + cankapat

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            fill(colors[matrix[y][x]])
            rect(x * side, y * side, side, side)
        }
    }
}

socket.on("send matrix", draww)


let springBtn = document.getElementById("spring")
springBtn.addEventListener("click",(evt) =>{
    colors = spring
})

let summerBtn = document.getElementById("summer")
summerBtn.addEventListener("click",(evt) =>{
    colors = summer
})

let autumnBtn = document.getElementById("autumn")
autumnBtn.addEventListener("click",(evt) =>{
    colors = autumn
})

let winterBtn = document.getElementById("winter")
winterBtn.addEventListener("click",(evt) =>{
    colors = winter
})



