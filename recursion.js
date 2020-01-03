let factorial = function fac(num) {
    if (num === 1) {
        // base case
        return 1;
    }
    // recursive case
    return num * fac(num - 1);
};

const final = factorial(5);
console.log(final);

/**************************************
 * Ilustrating Recursion with factorial
 *      5 * fac(4)
 *      5 * 4 * fac(3)
 *      5 * 4 * 3 * fac(2)
 *      5 * 4 * 3 * 2 * fac(1)
 *      5 * 4 * 3 * 2 * 1 ( <-- multiplying backwards)
 *      5 * 4 * 3 * 2
 *      5 * 4 * 6
 *      5 * 24 = 120 (result)
 * 
 * Using the Google Dev tools (debugger) you can easily see all the process. When the functions are stacking and, after reaching the end, unstacking.
 
Given a string, find all possible palindromic partitions of given string.

 input:
    nitin
 output:
    n i t i n
    n iti n
    nitin

 input:
    geeks
 output:
    g e e k s
    g ee k s
*/

const isPalindromic = (string) => {
    string.map(0,)
}