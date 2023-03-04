let LivingCreature = require("./livingCreature")
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 8
    }
    random(ch) {
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random() * found.length)
        return found[result];
    }

    mult() {
        var empty = this.random(0)
        this.multiply++
        if (empty && this.multiply > 3) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
            this.multiply = 0
        }
        
        var newcCell = this.random(7);
        if (newcCell) {
            this.energy++
        }

    }
}





