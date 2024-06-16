
/**
 * @param {number} count - The number of rows in the pyramid.
 */

function PyramidNumbers(count) {
    let countSize = 1;

    for (let i = 1; i <= count; i++) {
        let spaces = " ".repeat(count - i);
        let numbers = "";

        for (let j = 1; j <= i; j++) {
            numbers += countSize + " ";
            countSize++;
        }

        console.log(spaces + numbers)
    }
}

PyramidNumbers(7,"$")