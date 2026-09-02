/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
let output =[]
    for(i=0;i<jewels.length;i++){
        for(j=0;j<=stones.length;j++){
            if(jewels[i]==stones[j]){
                output.push(stones[j])
              
            }
        }
    }
return output.length

};