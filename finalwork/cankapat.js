
class Cankapat extends LivingCreature {

    mul() {
        var emptyCells = random(this.chooseCell(1));
        var emptyCells1 = random(this.chooseCell(2));
        var emptyCells2 = random(this.chooseCell(3));

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

