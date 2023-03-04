let LivingCreature = require("./livingCreature")
module.exports = class Garnuk extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 8
    }
    random(ch) {
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }
    randomCell(a, b) {
        let arr = [a, b]
        let result = Math.floor(Math.random() * arr.length)
        return arr[result]
    }

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(character) {
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;

    }

    mul() {
        var newCell = this.random(0);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5;
            var gr = new Garnuk(newX, newY);
            garnukArr.push(gr);
            this.energy = 8
        }
        var newcCell = this.random(7);
        if (newcCell) {
            this.energy++
        }

    }

    move() {
        this.energy--
        var newCell1 = this.random(0);
        var newCell2 = this.random(1);
        let newCell = this.randomCell(newCell1, newCell2)
        if (newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }

    eat() {
        var newCell = this.random(1);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy >= 8) {
                this.mul()
            }
        } else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in garnukArr) {
            if (this.x == garnukArr[i].x && this.y == garnukArr[i].y) {
                garnukArr.splice(i, 1);
                break;
            }
        }
    }
}