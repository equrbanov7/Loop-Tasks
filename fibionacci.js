
/**
 * @param {number} maxSize - The maximum size of the Fibonacci.
 */

function Fibionacci(maxSize) {
    let fibionacciSize = [0, 1];
  
    for (let i = 2; i < maxSize; i++) {
      let catchData = fibionacciSize[i - 1] + fibionacciSize[i - 2];
      fibionacciSize.push(catchData);
    }
    let resultFibionacci=fibionacciSize.join(", ");
    console.log(resultFibionacci);
  }

  Fibionacci(20)