let LivingCreature = require("./livingCreature")
module.exports = class Water extends LivingCreature {

    random(ch) {
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random() * found.length)
        return found[result];
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
   
  

}