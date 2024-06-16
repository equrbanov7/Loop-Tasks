/**
 * @param {number} column - The number of columns in the matrix.
 * @param {number} row - The number of rows in the matrix.
 * @param {string} symbol - The symbol for using matrix.
 */
function Matrix(column, row, symbol) {
    for (let i = 0; i < row; i++) {
        let formatSymbol = "";
        for (let j = 0; j < column; j++) {
            formatSymbol += symbol + " ";
        }
        console.log(formatSymbol.trim());
    }
}


Matrix(5, 3, "/")