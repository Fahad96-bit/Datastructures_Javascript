// Frequency Counter --  valid Anagram

const findAnagram = (first, second) => {
  if (first.length !== second.length) return false;
  const obj = {};

  for (char of first) {
    obj[char] = ++obj[char] || 1;
  }

  for (char of second) {
    if (!obj[char]) {
      return false;
    } else {
      obj[char] -= 1;
    }
  }
  return true;
};

// Two Pointers - Sum Zero
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// Two Pointers - countUniqueValues

const countUniqueValues = (arr) => {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

// sliding window - maxSubarraySum   // naive solution

const maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};

//sliding window - maxSubarraySum //optimal solition

const maxSubarr = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

// Frequency Counter pattern
function sameFrequency(num1, num2) {
  num1Counter = {};
  var num1Digits = num1.toString();
  var num2Digits = num2.toString();
  if (num1Digits.length !== num2Digits.length) {
    return false;
  }

  for (char of num1Digits) {
    num1Counter[char] = ++num1Counter[char] || 1;
  }

  for (char of num2Digits) {
    if (!num1Counter[char]) {
      return false;
    } else {
      --num1Counter[char];
    }
  }
  return true;
}

// Frequency Counter - areThereDuplicates in an argument

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// Multiple Pointers - areThereDuplicates in an argument

function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
// Multiple Pointers - averagePair

function averagePair(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
// Multiple Pointers - isSubsequence

function isSubsequence(str1, str2) {
  // good luck. Add any arguments you deem necessary.
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
console.log("sumZero", sameFrequency(22, 222));
