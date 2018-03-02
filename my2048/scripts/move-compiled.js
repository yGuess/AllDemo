/**
 * Created by �� on 2016/9/14.
 */
function leftMove() {
    var i, j, k;
    var cellNodes = [].slice.apply(document.querySelectorAll('.numCell'));
    for (i = 0; i < 4; i++) {
        for (k = 1; k < 4; k++) {
            if (numCells[i][k] != 0) {
                var cell = getCell(cellNodes, 16 * (i + 1) + 80 * i, 16 * (k + 1) + 80 * k);
                for (j = 0; j < k; j++) {
                    if (numCells[i][j] == 0 && horizon(i, j, k)) {
                        // �ƶ�
                        cellMoveAnimation(cell, i, j);
                        numCells[i][j] = numCells[i][k];
                        numCells[i][k] = 0;

                        break;
                    } else if (numCells[i][j] == numCells[i][k] && horizon(i, j, k)) {
                        cellMoveAnimation(cell, i, j);

                        // ��λ����ֵ�ӱ� ԭλ��������
                        numCells[i][j] *= 2, numCells[i][k] = 0;

                        //���Ǻϲ����ķ��� �޸ķ�����ʾֵ
                        markAndUpdateCell(16 * (i + 1) + 80 * i, 16 * (j + 1) + 80 * j, numCells[i][j]);
                        //cell.innerHTML = numCells[j][k];
                        break;
                    }
                }
            }
        }
    }
    setTimeout(removeMarkedCell, 200);
    //console.log(numCells);
}
function rightMove() {
    var i, j, k;
    var cellNodes = [].slice.apply(document.querySelectorAll('.numCell'));
    for (i = 0; i < 4; i++) {
        for (k = 2; k >= 0; k--) {
            if (numCells[i][k] != 0) {
                var cell = getCell(cellNodes, 16 * (i + 1) + 80 * i, 16 * (k + 1) + 80 * k);
                for (j = 3; j > k; j--) {
                    if (numCells[i][j] == 0 && horizon(i, k, j)) {
                        cellMoveAnimation(cell, i, j);

                        numCells[i][j] = numCells[i][k];
                        numCells[i][k] = 0;

                        break;
                    } else if (numCells[i][j] == numCells[i][k] && horizon(i, k, j)) {
                        cellMoveAnimation(cell, i, j);

                        numCells[i][j] *= 2, numCells[i][k] = 0;

                        markAndUpdateCell(16 * (i + 1) + 80 * i, 16 * (j + 1) + 80 * j, numCells[i][j]);
                        //cell.innerHTML = numCells[j][k];
                        break;
                    }
                }
            }
        }
    }
    setTimeout(removeMarkedCell, 200);
}
function upMove() {
    var i, j, k;
    var cellNodes = [].slice.apply(document.querySelectorAll('.numCell'));
    for (i = 1; i < 4; i++) {
        for (k = 0; k < 4; k++) {
            if (numCells[i][k] != 0) {
                var cell = getCell(cellNodes, 16 * (i + 1) + 80 * i, 16 * (k + 1) + 80 * k);
                for (j = 0; j < i; j++) {
                    if (numCells[j][k] == 0 && vertical(k, j, i)) {
                        cellMoveAnimation(cell, j, k);

                        numCells[j][k] = numCells[i][k];
                        numCells[i][k] = 0;

                        break;
                    } else if (numCells[j][k] == numCells[i][k] && vertical(k, j, i)) {
                        cellMoveAnimation(cell, j, k);

                        numCells[j][k] *= 2, numCells[i][k] = 0;

                        markAndUpdateCell(16 * (j + 1) + 80 * j, 16 * (k + 1) + 80 * k, numCells[j][k]);
                        //cell.innerHTML = numCells[j][k];
                        break;
                    }
                }
            }
        }
    }
    setTimeout(removeMarkedCell, 200);
}
function downMove() {
    var i, j, k;
    var cellNodes = [].slice.apply(document.querySelectorAll('.numCell'));
    for (i = 2; i >= 0; i--) {
        for (k = 0; k < 4; k++) {
            if (numCells[i][k] != 0) {
                var cell = getCell(cellNodes, 16 * (i + 1) + 80 * i, 16 * (k + 1) + 80 * k);
                for (j = 3; j > i; j--) {
                    if (numCells[j][k] == 0 && vertical(k, i, j)) {
                        cellMoveAnimation(cell, j, k);

                        numCells[j][k] = numCells[i][k];
                        numCells[i][k] = 0;
                        break;
                    } else if (numCells[j][k] == numCells[i][k] && vertical(k, i, j)) {
                        cellMoveAnimation(cell, j, k);

                        numCells[j][k] *= 2, numCells[i][k] = 0;

                        markAndUpdateCell(16 * (j + 1) + 80 * j, 16 * (k + 1) + 80 * k, numCells[j][k]);
                        //console.log(numCells);
                        break;
                    }
                }
            }
        }
    }
    setTimeout(removeMarkedCell, 200);
}
function cellMoveAnimation(cell, toTop, toLeft) {
    var newTop = 16 * (toTop + 1) + 80 * toTop,
        newLeft = 16 * (toLeft + 1) + 80 * toLeft;

    $(cell).animate({
        'top': newTop + 'px',
        'left': newLeft + 'px'
    }, 200);
}

//# sourceMappingURL=move-compiled.js.map