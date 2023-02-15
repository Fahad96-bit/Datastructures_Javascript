// bubble sort naive
// function bubbleSort(arr){
// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr.length;j++){
//     console.log(arr,arr[j],arr[j+1])
//     if(arr[j] > arr[j+1]){
//       let temp = arr[j]
//       arr[j] = arr[j+1]
//       arr[j+1] = temp
//     }
//   }
// }

// bubble sort cool code
// function bubbleSort(arr){
//   for(let i=arr.length;i > 0;i--){
//     for(let j=0;j< i - 1;j++){
//       console.log(arr,arr[j],arr[j+1])
//       if(arr[j] > arr[j+1]){
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }


// }
// console.log('bubbleSort',bubbleSort([20,11,5,4,100,33,0]))

// selection sort
// function selectionSort(arr){
// let min = 0
// for(let i=0;i<arr.length;i++){
//   min = i
//   for(let j=i+1;j<arr.length;j++){
//     console.log('index',i)
//     if(arr[min] > arr[j]){

//        min = j

//     }

//   }
//   if(i !== min){
//     let temp = arr[i]
//     arr[i] = arr[min]
//     arr[min] = temp
//     console.log('sorted',arr)
//   }


// }
// return arr
// }
// console.log('bubbleSort',selectionSort([4,5,11,20,33,95,100]))

// insertion sort

// function insertionSort(arr){
// for(i=1;i<arr.length;i++){
//   let item = arr[i]
// for(j=i-1;j>=0 && arr[j]>item;j++){
//   arr[j+1]=arr[j]
// }
// arr[j+1] = item
// }
// return arr
// }
// console.log('sort',insertionSort([20,11,5,4,100,33,96]))