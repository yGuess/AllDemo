/**
 * Created by 浩 on 2016/9/9.
 */

// 记录界面上对应位置上的数据
var numCells = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
var score = 0;
var showScore = document.querySelector('.score');

window.onload = function () {
    init();

    // 键盘侦听
    keydownListen();
};

function init() {
    var i, j;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            var num = i * 4 + j + 1;
            var cell = document.querySelector('#cell-' + num);

            cell.style.backgroundColor = '#ccc0b3';
            cell.style.top = 16 * (i + 1) + 80 * i + 'px';
            cell.style.left = 16 * (j + 1) + 80 * j + 'px';
        }
    }

    randomACell();
    randomACell();

    var twoCell = document.querySelectorAll('.numCell');
    compareScore(twoCell[0].innerHTML, twoCell[1].innerHTML);
    updateScore();
}

function keydownListen() {
    document.onkeydown = function (event) {
        //console.log(numCells);
        var evt = event || window.event;
        switch (evt.keyCode) {
            //左
            case 37:
                leftMove();break;
            //上
            case 38:
                upMove();break;
            //右
            case 39:
                rightMove();break;
            //下
            case 40:
                downMove();break;
        }
        setTimeout(randomACell, 200);
        setTimeout(isGameOver, 200);
        //console.log(score);
    };
}
/*
 *      随机产生一个带数字的方块,随机30次。
 *      超过30次未找到合适的位置，即按顺序查找空位
 */
function randomACell() {
    if (isFull()) {
        return false;
    }

    var randomX, randomY;
    var times = 0; //计算随机次数
    do {
        if (times == 30) {
            break;
        }
        randomX = parseInt(Math.floor(Math.random() * 4));
        randomY = parseInt(Math.floor(Math.random() * 4));

        times++;
    } while (isZero(randomX, randomY));

    if (times == 30) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (numCells[i][j] == 0) {
                    randomX = i;
                    randomY = j;
                }
            }
        }
    }
    // 产生、添加新方块
    var newCell = document.createElement('div');
    newCell.style.backgroundColor = 'rgb(237, 224, 200)';
    newCell.style.top = 16 * (randomX + 1) + 80 * randomX + 'px';
    newCell.style.left = 16 * (randomY + 1) + 80 * randomY + 'px';

    var cellValue = Math.random() >= 0.5 ? 1 : 2;
    newCell.innerHTML = cellValue;
    numCells[randomX][randomY] = cellValue;
    //console.log(numCells);

    newCell.setAttribute('class', 'numCell');
    document.querySelector('#wrap').appendChild(newCell);

    updateScore();
}
/*
 *      标记同一位置上多余的方块,并修改该位置上方块的显示值
 *      同时比较得出所有方块显示值的最大值
 */
function markAndUpdateCell(desTop, desLeft, value) {
    var cellArr = document.querySelectorAll('.numCell');
    var i,
        j,
        len = cellArr.length;
    //console.log(desTop+' '+desLeft);

    setTimeout(function () {
        for (i = 0, j = 0; i < len; i++) {
            if (cellArr[i].offsetTop == desTop && cellArr[i].offsetLeft == desLeft) {
                cellArr[i].innerHTML = value;
                if (j >= 1) {
                    cellArr[i].setAttribute('class', 'numCell mark');
                }
                j++;
            }
            compareScore(score, parseInt(cellArr[i].innerHTML));
            //console.log(desTop+' '+desLeft);
        }
    }, 200);
}
function removeMarkedCell() {
    var markCells = document.querySelectorAll('.mark');
    var parent = document.querySelector('#wrap');
    for (var len = markCells.length - 1; len >= 0; len--) {
        parent.removeChild(markCells[len]);
    }
}
function getCell(childNodes, row, col) {
    var len = childNodes.length,
        i;
    for (i = 0; i < len; i++) {
        if (childNodes[i].offsetTop == row && childNodes[i].offsetLeft == col) {
            return childNodes[i];
        }
    }
}
/*
 *      检测两个横向位置上的点之间是否存在其他数
 */
function horizon(posTop, fromLeft, toLeft) {
    for (var k = fromLeft + 1; k < toLeft; k++) {
        if (numCells[posTop][k] != 0) {
            return false;
        }
    }
    return true;
}
function vertical(posLeft, fromTop, toTop) {
    for (var i = fromTop + 1; i < toTop; i++) {
        if (numCells[i][posLeft] != 0) {
            return false;
        }
    }
    return true;
}
function compareScore(s1, s2) {
    score = s1 > s2 ? s1 : s2;
}
function updateScore() {
    showScore.innerHTML = score;
}
function isFull() {
    var i, j;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            if (numCells[i][j] == 0) {
                return false;
            }
        }
    }
    return true;
}
function isSameValue() {
    var i, j;
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            try {
                if (i == 3 && j == 3) {
                    return true;
                } else if (i == 3 && j != 3 && numCells[i][j] == numCells[i][j + 1]) {
                    return false;
                } else if (i != 3 && j == 3 && numCells[i][j] == numCells[i + 1][j]) {
                    return false;
                } else if (numCells[i][j] == numCells[i][j + 1] || numCells[i][j] == numCells[i + 1][j]) {
                    return false;
                }
            } catch (error) {
                console.log(i + ' ' + j);
            }
        }
    }
}
function isGameOver() {
    if (!isFull() || !isSameValue()) {
        //console.log(numCells);
        return false;
    }
    setTimeout(function () {
        alert('游戏结束！');
        window.location.reload();
    }, 210);
}
function isZero(posX, posY) {
    return numCells[posX][posY] ? true : false;
}
function getCellPos(cell) {
    var top = cell.offsetTop,
        left = cell.offsetLeft;
    var col = parseInt(top % 80 / 16),
        row = parseInt(left % 80 / 16);

    return [col - 1, row - 1];
}

//# sourceMappingURL=main-compiled.js.map