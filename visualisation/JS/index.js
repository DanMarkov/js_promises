/* index.js */
import { wait } from "./helpers.js";

console.log("A");
wait(3000).then(() => {
  console.log("B");
})
console.log("C");