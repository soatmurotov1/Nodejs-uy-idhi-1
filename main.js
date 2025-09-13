

import { sleep } from "./sleep.js";
import { getRandom } from "./random.js";
import { Person } from "./person.js";


let ms = getRandom()
console.log(`Vaqt: ${ms}`);

await sleep(ms)


let p1 = new Person("Ali", "2000-12-12");
console.log(p1.getInfo());
