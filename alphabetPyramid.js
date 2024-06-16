/**
 * @param {string} char - The starting character for the pyramid.
 * @param {number} count - The number of rows in the alphabet pyramid.
 */
function AlphabetPyramid(char, count) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //console.log(alphabet);
    let findIndex = alphabet.findIndex(letter => letter === char);
    for (let i = 0; i < count; i++) {
        let spaces = " ".repeat(count - i - 1);
        let currentValue = "";

        for (let j = 0; j <= i; j++) {
            currentValue += alphabet[findIndex + j].toUpperCase();
        }

        let reversedValue = currentValue.split('').reverse().slice(1).join('');
        console.log(spaces + currentValue + reversedValue);
    }

}

AlphabetPyramid("e",7)