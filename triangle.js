/**
 * @param {number} count - The number of lines in the triangle.
 * @param {string} symbol - The symbol for using triangle.
 */

function Triangle(count, symbol) {
    let formatSymbol = symbol;
    for (let i = 0; i < count; i++) {
        console.log(formatSymbol);
        formatSymbol += symbol;
    }
}

Triangle(20, "*")