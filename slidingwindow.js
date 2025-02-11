const maxSubarraySum=(arr,num)=>{

let sum = 0
for(let i=0;i<num;i++){
sum += arr[i]
}
let maxSum = sum
for(let i=num ; i < arr.length ; i++){
    sum = sum -  arr[i - num]  + arr[i]
    console.log("sum",sum,arr[i])
   if(sum > maxSum){
    maxSum = sum
   }
}
return maxSum
}


function minSubArrayLen(targetSum, nums) {
    let minLength = Infinity;
    let windowStart = 0;
    let currentSum = 0;
  
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      currentSum += nums[windowEnd];
  
      while (currentSum >= targetSum) {
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        currentSum -= nums[windowStart];
        windowStart++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
  }



  function findLongestSubstring(str) {
    let longest = 0; // Initialize the length of the longest substring
    let start = 0; // Start of the current substring
    const seen = {}; // Store the most recent index of each character
  
    for (let end = 0; end < str.length; end++) {
      const char = str[end];
      if (seen[char] >= start) {
        start = seen[char] + 1; // Update the start position
        console.log("start",start,end,char)
      }
      seen[char] = end; // Store the most recent index of the character
      const currentLength = end - start + 1;
      longest = Math.max(longest, currentLength);
    }
  
    return longest;
  }
  
//   const nums = [1,4,16,22,5,7,8,9,10];
// //   minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//   const targetSum =82;
//   const minLength = minSubArrayLen(targetSum, nums);

//   findLongestSubstring('thisishowwedoit') // 6
  
  console.log("minLength",findLongestSubstring('aaaa'));
