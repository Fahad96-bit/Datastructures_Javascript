// linear search
// function linearSearch(arr,value){
// for(let i=0;i<arr.length;i++){
//   if(arr[i] === value) return i
// }
// return -1
// }
// console.log('linearS',linearSearch([0,5,3,2,7,3,2],2))

// binary search
let step = 0
function binarySearch(arr,value){

  let left= 0
  let right = arr.length-1
  let middle = Math.ceil((left + right) / 2)
  while(left <= right){
    step++
     if(arr[middle] === value) return middle

     if(value > arr[middle]) {
      left = middle + 1
     }
     if(value < arr[middle]){
      right = middle - 1
     }
     middle = Math.ceil((left + right )/ 2)
  }
  return -1
}
console.log('linearS',binarySearch([1,2,3,4,5,6,7,8,9,10],100))
console.log('steps',step)
