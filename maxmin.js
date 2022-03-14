function getArray () {
  let theArray = []
  let userArray = prompt('enter numbers with a comma').split(',').map(Number)
return userArray
 }

function minMax(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}

console.log(minMax(getArray()));
