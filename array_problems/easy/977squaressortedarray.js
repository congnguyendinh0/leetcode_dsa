/**
 * @param {number[]} A
 * @return {number[]}
 */

 /*
 create a new array which has the same length as the first Array
 pointer to the left and pointer to the right 
 we will fill up the new array from backwards
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
because either the square value of the left or right pointer will be the greatest

two pointers approach linear
 
 */ 
var sortedSquares = function(A) {
    var results = new Array (A.length)
    var start = 0;
    var end = A.length-1;
    
    for(i=A.length-1;i>=0;i--){
        if(Math.abs(A[start])>A[end]){
            results[i]= A[start]*A[start]
            start++
        }
        else{
             results[i]= A[end]*A[end]
            end--
        }
    
    }
    return results
    
};