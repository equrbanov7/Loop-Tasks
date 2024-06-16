
/**
 * @param {number} column - The number of columns in the frame.
 * @param {number} row - The number of rows in the frame.
 * @param {string} symbol - The symbol for using frame.
 */
function Frame(column, row, symbol) {
    for (let i = 0; i < row; i++) {
        let formatSymbol = "";
        for (let j = 0; j < column; j++) {
            if (i === 0 || i === row - 1 || j === 0 || j === column - 1) {
                formatSymbol += symbol + " ";
            } else {
                formatSymbol += "  ";
            }
        }
        console.log(formatSymbol);
    }
}

Frame(7, 4, "+")