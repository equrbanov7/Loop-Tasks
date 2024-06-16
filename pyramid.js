/**
 * @param {number} count - The number of lines in the pyramid.
 * @param {string} symbol - The symbol for using pyramid.
 */

function Pyramid(count, symbol) {
    for (let i = 0; i < count; i++) {
        let spaces = " ".repeat(count - i - 1);
        let symbols = symbol.repeat(2 * i + 1);
        console.log(spaces + symbols);
    }
}

Pyramid(5, "&")