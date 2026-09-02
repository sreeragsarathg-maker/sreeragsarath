/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let right=""+x
    let left=""
 
 for(let i=right.length-1;i>=0;i--){
     left+=right[i]
 }
    console.log(right)
    console.log(left)
 if(right===left){
    return true
 }else{
    return false
 }


};