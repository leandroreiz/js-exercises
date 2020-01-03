let factorial = function fac(num) {
    if (num === 1) {
        return 1;
    }

    return num * fac(num - 1);
};

const final = factorial(5);
console.log(final);

/************************
 * Ilustrating Recursion
 *      5 * fac(4)
 *      5 * 4 * fac(3)
 *      5 * 4 * 3 * fac(2)
 *      5 * 4 * 3 * 2 * fac(1)
 *      5 * 4 * 3 * 2 * 1 ( <-- multiplying backwards)
 *      5 * 4 * 3 * 2
 *      5 * 4 * 6
 *      5 * 24 = 120 (result)
 */

 // Using the Google Dev tools (debugger) you can easily see all the process. When the functions are stacking and, after reaching the end, unstacking.