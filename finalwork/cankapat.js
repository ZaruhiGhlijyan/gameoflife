let LivingCreature = require("./livingCreature")
module.exports = class Cankapat extends LivingCreature {
    random(ch){
        let found = this.chooseCell(ch);
        let result = Math.floor(Math.random()*found.length)
        return found[result];
    }

    mul() {
        var emptyCells = this.random(1);
        var emptyCells1 = this.random(2);
        var emptyCells2 = this.random(3);

        if (emptyCells) {
            let x = emptyCells[0]
            let y = emptyCells[1]
            matrix[y][x] = 0;

            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }


        }
        else if (emptyCells1) {
            let x = emptyCells1[0]
            let y = emptyCells1[1]
            matrix[y][x] = 0;

            for (var i in grassEaterArr) {
                if (x == grassEaterArr[i].x && y == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
        }
        else if (emptyCells2) {
            let x = emptyCells2[0]
            let y = emptyCells2[1]
            matrix[y][x] = 0;

            for (var i in predatorArr) {
                if (x == predatorArr[i].x && y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}

