/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
    let value=0
    for(i=0;i<nums.length;i++){
        if(nums[i]!==val){
          nums[value]=nums[i];
          value++;
            

        }

    }  
    return value;
};