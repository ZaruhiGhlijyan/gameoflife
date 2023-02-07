let matrix = []
function generate(a, b) {
    let m = matrix.length - 1
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < b; j++) {
            matrix[i].push(Math.floor(Math.random() * 4))            
        }
        
    }
}
function col(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[0][x] = 5
            matrix[y][0] = 5
            matrix[y][matrix[x].length - 1] = 5
            matrix[matrix.length - 1][x] = 5
        }
    }
   
}

generate(120,120)
col()
var side = 5;
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var cankapatArr = [];
var garnuk = [];


function setup() {
    noStroke()
    frameRate(15);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}



// setTimeout(function(){
//     for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         let x = Math.round(Math.random() *50)
//         let y = Math.round(Math.random() *50)
//         if(matrix[y][x] ===0){

//             matrix[i].push(4)            
//         }
//     }}
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 4) {
//                     var gr = new Garnuk(x, y)
//                     garnukArr.push(gr)
//                 }
//         }
//     }

// },3000)



function objes(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new GrassEater(x, y)
                grassEaterArr.push(xt)
            }
            else if (matrix[y][x] == 3) {
                var ut = new Predator(x, y)
                predatorArr.push(ut)
            }
            else if (matrix[y][x] == 5) {
                var ut = new Cankapat(x, y)
                cankapatArr.push(ut)
            }
        }
    }
}

objes()
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("#357C3C");
            }
            else if (matrix[y][x] == 2) {
                fill("#FFC300");
            }
            else if (matrix[y][x] == 3) {
                fill("#B33030")
            }
            else if (matrix[y][x] == 0) {
                fill("#85C88A");
            }
            else if (matrix[y][x] == 4){
                fill("white")
            }
            else if (matrix[y][x] == 5){
                fill("#85586F")
            }

            rect(x * side, y * side, side, side)
        }
    }

    for (var i in grassArr) {
        grassArr[i].mult()
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (var i in predatorArr) {
        predatorArr[i].eat()
    }
    for (var i in cankapatArr){
        cankapatArr[i].mul()
    }
    // for (var i in garnukArr){
    //     garnukArr[i].move()
    // }
}
