/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

 /* The entire logic for reversing a string is based on using the opposite directional two-pointer approach 
    Input: ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

    1. set a pointer to the beginning of the array  and another to the end of the array
    2. create a while loop with the condition start <= end
    3. save the start pointer value in a variable
    4. now swap the values of the start and end 
    5. start = end  and end = temp
    6. now increase start and decrease end

    */


var reverseString = function(s) {
    var start = 0;
    var end = s.length-1;
    
    while(start <= end){
         temp = s[start];
         s[start] = s[end];
         s[end]= temp;
         start++;
         end--;
    }
};