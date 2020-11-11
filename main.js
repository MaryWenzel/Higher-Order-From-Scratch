// .map() - function that takes an array of items and a function that returns an array with each item manipulated by that function.
// --------------------------------------------------

let mapArray = [1, 2, 3, 4, 5]

const mapFromScratch = function (call) {
  const mapArray = []
  for(let i = 0; i < this.length; i++){
    mapArray[i] = call(this[i], i)
  }
  return mapArray
}
Array.prototype.myMap = mapFromScratch
// Multiplies each number in the array by 4
console.log('Map():', mapArray.myMap((x) => x * 4))

// .reduce() - function that takes an array of food orders with their amounts and returns the total amount of all the food orders.
// --------------------------------------------------

let reduceArray = [15.23, 12.10, 1.98, 23.47, 17.99]

const reduceFromScratch = function (call, sumArray) {
  for (let i = 0; i < this.length; i++){
    sumArray = call(sumArray, this[i])
  }
  return sumArray
}

Array.prototype.myReduce = reduceFromScratch

// returns sum of all numbers of reduceArray
console.log('Reduce():', reduceArray.myReduce((x, sumArray) => x + sumArray, 0))

// .filter() - function that takes an array of items and a function that returns an array with only the items that return true in the function.
// --------------------------------------------------

let filterArray = [25, 2, 6, 13, 90, 55]

const filterFromScratch = function (call){
  const filterArray =[]
  for(let i = 0; i < this.length; i++){
    if(call(this[i])){
      filterArray.push(this[i])
    }
  }
  return filterArray
}

Array.prototype.myFilter = filterFromScratch
// grabbing all numbers greater than 15
console.log('Filter():', filterArray.myFilter((x) => x > 15))