// 2 ways to import

import { sumTwo, sumThree } from "math/addition";

import * as multiplication from "math/multiplication";

import { users } from "data/users"; 

// third-party
import * as _ from "lodash";

console.log("2 + 3", sumTwo(2, 3));

console.log("2 + 3 + 4", sumThree(2, 3, 4));

console.log("2 * 3 * 4 * 5", multiplication.productFour(2, 3, 4, 5));

console.log("2 * 3 * 4", multiplication.productThree(2, 3, 4));

console.log(_.where(users, {age: 36}));