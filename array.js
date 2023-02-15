
// .  Frequency Counter
// function findAnagram(str1, str2) {
//   str1Counter = {}
//   str2Counter = {}

//   for (char of str1) {
//     str1Counter[char] = ++str1Counter[char] || 1
//   }
//   for (char of str2) {
//     str2Counter[char] = ++str2Counter[char] || 1
//   }
//   console.log(str1Counter, str2Counter)
//   for (char of str2) {
//     if (str1.length !== str2.length) {
//       return false
//     }
//     if (str2Counter[char] !== str1Counter[char]) {
//       return false
//     }

//   }
//   return true


// }


// console.log('isAnagaram', findAnagram('awesome', 'awesome'))


//  Two pointers approach



// function countUniqueValues(arr) {

//   let i = 0
//   let j = 1
//   console.log('length', arr.length)
//   if (arr.length === 0) {
//     return 0
//   }
//   while (j <= arr.length - 1) {
//     if (arr[i] !== arr[j]) {
//       i++
//       arr[i] = arr[j]
//       j++


//     }
//     else {
//       j++
//     }
//   }
//   return i + 1
// }

// console.log('sdsdsd', countUniqueValues([2]))


// FrequencyCounter pattern another question

// function sameFrequency(num1, num2) {

//   num1Counter = {}
//   var num1Digits = num1.toString().split('')
//   var num2Digits = num2.toString().split('')
//   if (num1Digits.length !== num2Digits.length) {
//     return false
//   }

//   for (char of num1Digits) {
//     num1Counter[char] = ++num1Counter[char] || 1
//   }

//   for (char of num2Digits) {
//     if (num1Counter[char] === 0 || !num1Counter[char]) {
//       return false
//     }
//     if (num1Counter[char] !== 0) {
//       --num1Counter[char]
//     }
//   }
//   return true


// }

// console.log('sameFreq', sameFrequency(34, 32324))


//    are there duplicates frequency counter pattern


// function areThereDuplicates(...args) {
//   let variableArg = [...args]
//   let variableCounter = {}
//   for (char of variableArg) {
//     variableCounter[char] = ++variableCounter[char] || 1
//     if (variableCounter[char] > 1) {
//       return true
//     }
//   }
//   console.log('counter', variableCounter)
//   return false

// }

// // let args = []
// // args = ['a', 'b', 'c', 'x', 't']
// console.log('dupliactes', areThereDuplicates('a', 'b', 'c', 'x', 't'))


// AvgPaire two pointers


// function averagePair(arr, targetAvg) {
//   let start = 0
//   let next = 1
//   while (next <= arr.length) {
//     if (arr[start] + arr[next] / 2 === targetAvg) {
//       return true
//     }
//     start++
//     next++
//   }
//   return false

// }

// console.log('pairr', averagePair([1, 3, 3, 5, 6, 10, 12, 19], 8))

// isSubsequence multiple pointers pattern

// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// console.log('isSubsequence', isSubsequence('abc', 'acb'))

// const arr1 = [{ name: 'fahad', value: ['opd', 'ipd', 'hello'], region: 'Karachi' }, { name: 'haris', value: ['apply', 'applys'], region: 'Islamabad' }]
// const arr2 = [{ name: 'fahad', value: ['apply', 'applys'], region: 'Karachi' },
// { name: 'fahad', value: ['opd', 'ipd', 'hello'], region: 'Karachi' },
// { name: 'haris', value: ['apply', 'applys'], region: 'Islamabad' },
// { name: 'fadehad', value: ['apply', 'applys'], region: 'Karachi' },
// { name: 'faccfhad', value: ['apply', 'applys'], region: 'Karachi' },
// { name: 'faccfhad', value: ['apply', 'applys'], region: 'Karachi' },
// { name: 'faccfhad', value: ['apply', 'applys'], region: 'Karachi' },
// { name: 'faccfhad', value: ['apply', 'applys'], region: 'Karachi' },
// { name: 'faccfhad', value: ['apply', 'applys'], region: 'Karachi' },
// { name: 'faccfhad', value: ['apply', 'applys'], region: 'Karachi' },
// { name: 'faccwwwfhad', value: ['apply', 'applys'], region: 'Karachi' },
// { name: 'fahad', value: ['apply', 'applys'], region: 'Karachi' }
// ]




// console.log('sadsd', arr2.filter(item => arr1.find((obj) => obj.name === item.name)))


//max subarraySum

// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null
//   }
//   let sum = 0
//   for (let i = 0; i < num; i++) {
//     sum = sum + arr[i]
//   }
//   let maxSum = 0
//   for (let j = num; j < arr.length; j++) {
//     sum = sum + arr[j] - arr[j - num]

//     if (sum > maxSum) {
//       maxSum = sum
//     }
//   }
//   return maxSum

// }

// console.log('subarray', maxSubarraySum([2, 3], 3))

//minSubArrayLen
// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
//     // move the window to right
//     if (total < sum && end < nums.length) {
//       total += nums[end];
//       end++;
//     }
//     // if current window adds up to at least the sum given then
//     // we can shrink the window
//     else if (total >= sum) {
//       console.log('length', end - start)
//       minLen = Math.min(minLen, end - start);
//       total -= nums[start];
//       start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }
// console.log('minSubarrayLength', minSubArrayLen([2, 3, 1, 2, 4, 3], 7))


//findLongestSubstring

// function findLongestSubsbtring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       console.log('char', seen[char])
//       start = seen[char];
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }


// console.log('findLongestSubstring', findLongestSubsbtring('longesrsubstring'))

function helloRec(num) {
  if (num === 1) return 1

  return helloRec(num - 1)

}

helloRec(9)