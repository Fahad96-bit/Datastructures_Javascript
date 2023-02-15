// Merge function from earlier
// let count = 0
// function merge(arr1, arr2){
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while(i < arr1.length && j < arr2.length){
//     count++
//       if(arr2[j] > arr1[i]){
//           results.push(arr1[i]);
//           i++;
//       } else {
//           results.push(arr2[j])
//           j++;
//       }
//   }
//   while(i < arr1.length) {
//     count++
//       results.push(arr1[i])
//       i++;
//   }
//   while(j < arr2.length) {
//     count++
//       results.push(arr2[j])
//       j++;
//   }
//   return results;
// }

// // Recrusive Merge Sort
// function mergeSort(arr){
//   if(arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length/2);
//   let left = mergeSort(arr.slice(0,mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }


// mergeSort([10,24,76,73,0,2,4,90])
// console.log('asdsd',count)

// Quick Sort


function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);
        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
}

quickSort([100,-3,2,4,6,9,1,2,5,3,23])




// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1




console.log('quick',pivot([3,9,10,2,1,0,5]))


function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])







