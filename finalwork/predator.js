let LivingCreature = require("./livingCreature")
module.exports = class Predator extends LivingCreature {
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
        this.getNewCoordinates()
        return super.chooseCell(character)
    }

    mul() {
        var newCell = this.random(0);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            var pr = new Predator(newX, newY);
            predatorArr.push(pr);
            this.energy = 8
        }
        var newcCell1 = this.random(7);
        if (newcCell1) {
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
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
        } else {
            this.die()
        }
    }

    eat() {
        var newCell = this.random(2);
        if (newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            if (this.energy >= 10) {
                this.mul()
            }
        } else {
            this.move()
        }
    }

    die() {
        matrix[this.y][this.x] = 0
        for (var i in predatorArr) {
            if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                predatorArr.splice(i, 1);
                break;
            }
        }
    }
}


