// function power(base, exponent) {
//   if (exponent === 0) return 1

//   return base * power(base, exponent - 1)

// }

// console.log('power', power(5, 3))

// function factorial(num) {
//   if (num === 0) return 1
//   return num * factorial(num - 1)
// }
// console.log('powfactorialer', factorial(0))

// productOfArray([1,2,3,10]) // 60

// function productOfArray(arr) {
//   if (arr.length === 0) return 1

//   return arr[0] * productOfArray(arr.slice(1))
// }

// console.log('slice', productOfArray([1, 2, 3, 2]))

// function recursiveRange(num) {
//   if (num === 0) return 0
//   return num + recursiveRange(num - 1)
// }
// console.log('range', recursiveRange(10))

// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log('fib', fib(10))
// function reverseStr(str) {

//   if (str.length <= 0) return ''
//   return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1))
// }
// function reverse(str) {
//   if (str.length <= 1) return str;
//   reverse(str.slice(1)) + str[0];
//   console.log('str', str[0])
// }
// console.log('str', reverse('rithmschool'))

// function palindrome(str) {
//   if (str[0] !== str[str.length - 1] && str.length > 0) {
//     return false
//   } else if (str.length === 0) {
//     return true
//   }
//   return palindrome(str.slice(1, str.length - 1))
// }

// console.log('palindrome', palindrome('madams'))

// const isOdd = val => val % 2 !== 0
// function someRecursive(arr, cb) {
//   if (arr.length === 0) {
//     return false
//   } else if (cb(arr[0])) {
//     return true
//   }

//   return someRecursive(arr.slice(1), cb)
// }
// console.log('rec', someRecursive([2, 4, 6, 8, 12], val => val > 10))

// Array.isArray(value)

// let i = 0
// function flatten(arr) {
//   console.log('arrs', arr[i])
//   if (i > arr.length - 1) return arr

//   if (Array.isArray(arr[i])) {
//     arr.splice(i, 1, ...arr[i]);
//     console.log('arr', arr)
//     // arr[i] = ...arr[i]
//   } else {
//     i++
//   }
//   return flatten(arr)
// }
// console.log('flatten', flatten([1, [2, [3, 4], [[5]]]]))

// another flatten exp
// var newArr = []
// for(var i = 0; i < oldArr.length; i++){
//   if(Array.isArray(oldArr[i])){
//       newArr = newArr.concat(flatten(oldArr[i]))
//   } else {
//       newArr.push(oldArr[i])
//   }
// }
// return newArr;

// function capitalizeFirst(arr) {
//   // add whatever parameters you deem necessary - good luck!
//   for (var i = 0; i < arr.length; i++) {
//     let string = arr[i]
//     string = string[0].toUpperCase() + string.slice(1);
//     arr[i] = string
//   }
//   return arr
// }
// function capitalizeFirst(array) {
//   if (array.length === 1) {
//     return [array[0][0].toUpperCase() + array[0].substr(1)];
//   }
//   const res = capitalizeFirst(array.slice(0, -1));
//   console.log('asdasd', array.slice(array.length - 1)[0])
//   const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
//   res.push(string);
//   return res;
// }
// console.log('strF', capitalizeFirst(['car', 'taco', 'banana']))
// console.log('strF', ['car', 'taco', 'banana'].slice(0, -1))
// obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

//Object.entries and object.values
// function nestedEvenSum(obj) {
//   let res = 0
//   for (const key in obj) {
//     if (typeof obj[key] === 'object') {
//       let sum = nestedEvenSum(obj[key])
//       res = res + sum
//     }
//     if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
//       res = res + obj[key]

//     }
//   }
//   return res
// }

// console.log('sum', nestedEvenSum(obj1))
// console.log('entries', Object.entries())

// capitalize words
// function capitalizedWords(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   const res = capitalizedWords(array.slice(0, -1));
//   const string = array.slice(array.length - 1)[0].toUpperCase()
//   res.push(string);
//   return res;
// }

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log('words', capitalizedWords(words))

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

function stringifyNumbers(obj) {
  newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    }
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      let value = stringifyNumbers(obj[key]);
      newObj[key] = value;
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log("stringify", stringifyNumbers(obj));
// const obj = {
//   stuff: "foo",
//   data: {
//     val: {
//       thing: {
//         info: "bar",
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: "baz"
//           }
//         }
//       }
//     }
//   }
// }

// function collectStrings(obj) {
//   let arr = []
//   gatherstring(obj)
//   function gatherstring(obj) {
//     for (const key in obj) {
//       if (typeof obj[key] === 'object') {
//         gatherstring(obj[key])
//       }
//       if (typeof obj[key] === 'string') {
//         arr.push(obj[key])

//       }
//     }
//   }
//   return arr
// }
// console.log('stringify', collectStrings(obj))

function doCheck(num) {
  if (num === 1) return 0;

  doCheck(num - 1);
  console.log("num", num);
}

console.log("doCheck", doCheck(3));
