// module.exports = { randomInt, chooseRandomFromArray, weightedChooseFromArray }

export function randomInt(min, max) { //The minimum is inclusive and the maximum is exclusive.
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
} 

export function chooseRandomFromArray(array) {
  let randomIndex = randomInt(0, array.length)
  let choice = array[randomIndex]
  // console.log(`CHOICE: ${choice}`);
  return choice
}

export function weightedChooseFromArray(arrayToChooseFrom, weights) {
  console.assert(arrayToChooseFrom.length === weights.length, 'weightedChooseFromArray recieved invalid params')
  let randomIndex = randomInt(0, arrayToChooseFrom.length)
  let choice = arrayToChooseFrom[randomIndex]
  // console.log(`CHOICE: ${choice}`);
  return choice
}