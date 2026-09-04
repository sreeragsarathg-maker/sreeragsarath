/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let k=0
    let sum=[]
    
    for(i=0;i<nums.length;i++){
        k= k+nums[i]
        sum.push(k)
    }
    return sum
}