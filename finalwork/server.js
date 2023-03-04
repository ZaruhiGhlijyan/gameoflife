var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

server.listen(3000);

let Grass = require("./grass")
let GrassEater = require("./grassEater")
let Predator = require("./predator")
let Cankapat = require("./cankapat")
let Garnuk = require("./garnuk")
let Water = require("./water")


matrix = []
function generate(a, b) {
    let m = matrix.length - 1
    for (let i = 0; i < a; i++) {
        matrix.push([])
        for (let j = 0; j < b; j++) {
            matrix[i].push(Math.floor(Math.random() * 4))
        }

    }
    io.emit("send matrix", matrix)
}


setTimeout(function () {
    let count = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let x = Math.round(Math.random() * 119)
            let y = Math.round(Math.random() * 119)
            if (i !== 0 && j !== 0 && i !== matrix.length - 1 && j !== matrix[i].length - 1 && i !== 7 && j !== 7) {
                if (matrix[y][x] === 0 && count < 20) {
                    matrix[j][i] = 5
                    count++
                }
            }

        }
    }
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 5) {
                var gr = new Garnuk(x, y)
                garnukArr.push(gr)
            }
        }
    }
    io.emit("send matrix", matrix)

}, 10000)

function col() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[0][x] = 6
            matrix[y][0] = 6
            matrix[y][matrix[x].length - 1] = 6
            matrix[matrix.length - 1][x] = 6
        }
    }

}

function loc() {

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            var x = Math.round(Math.random() * 119)
            var y = Math.round(Math.random() * 119)
            if (i == 10 && j == 10) {
                matrix[j][i] = 7

            }
            if (i == 10 && j == 108) {
                matrix[j][i] = 7


            }
            if (i == 108 && j == 10) {
                matrix[j][i] = 7


            }
            if (i == 108 && j == 108) {
                matrix[j][i] = 7


            }
        }
    }
}

generate(120, 120)
loc()
col()
grassArr = [];
grassEaterArr = [];
predatorArr = [];
cankapatArr = [];
garnukArr = [];
waterArr = [];


function objes() {
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
                var ut = new Garnuk(x, y)
                garnukArr.push(ut)
            }
            else if (matrix[y][x] == 6) {
                var ut = new Cankapat(x, y)
                cankapatArr.push(ut)
            }
            else if (matrix[y][x] == 7) {
                var wt = new Water(x, y)
                waterArr.push(wt)
            }
        }
    }
}
objes()

function game() {
    for (var i in grassArr) {
        grassArr[i].mult()
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (var i in predatorArr) {
        predatorArr[i].eat()
    }
    for (var i in cankapatArr) {
        cankapatArr[i].mul()
    }
    for (var i in garnukArr) {
        garnukArr[i].eat()
    }
    let state = {
        grass : grassArr.length,
        grassEater : grassEaterArr.length,
        predator : predatorArr.length,
        cankapat : cankapatArr.length,
        garnuk : garnukArr.length,
        water : waterArr.length,
        cankapat : cankapatArr.length
    }
    io.emit("send matrix", matrix,state)
}
setInterval(game, 500)



