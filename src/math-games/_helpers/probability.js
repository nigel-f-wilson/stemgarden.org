
export function intersect(listOne, listTwo) {
  return listOne.filter(item => listTwo.includes(item))
}


// function factorial(num) {
//     console.assert(num >= 0 && num <=9, `Factorial called with a number out of this game's range!`)
//     let product = 1
//     for (let i = 1; i <= num; i++) {
//         product = product * i
//     }
//     return product
//     // This led to a fun research rabbit hole about how to more efficiently compute factorials using Paschals Triangle
// }


// For most heavily used generic math functions like intersect, union, factorial, mean, randomInt, randomFromArray, choose, ppermutations, combinations.