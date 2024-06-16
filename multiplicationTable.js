
/**
 * The function immediately calls itself and prints a multiplication table from 1 to 10.
 */
(function MultiplicationTable() {
    for (let i = 1; i < 11; i++) {
      for (let j = 1; j < 11; j++) {
        console.log(`${i} X ${j} = ${i * j}`);
      }
      console.log(" ");
    }
  }
)()
  