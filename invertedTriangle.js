
/**
 * @param {number} count - The number of lines in the triangle.
 * @param {string} symbol - The symbol for using Inverted Triangle.
 */

function InvertedTriangle(count, symbol) {
    let formatSymbol = symbol;
    for (let i = 0; i < count; i++) {
        formatSymbol = symbol.repeat(count - i);
        console.log(formatSymbol);

    }
}

InvertedTriangle(8, "#")