/**
 * Multiple 3 or 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5,
 * we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 * Additionally, if the number is negative, return 0.
 *
 * Note: If the number is a multiple of both 3 and 5, only count it once.
 *
 * @param number
 */
const solution = (number) => {
   let finalNumber = 0;

   for(let index = 0; index < number; index++){
       let intercept = index / 3;

       if(intercept % 1 === 0) {
           finalNumber = finalNumber + index;
           continue
       }

       intercept = index / 5;

       if(intercept % 1 === 0){
           finalNumber = finalNumber + index;
       }
   }

   if(finalNumber < 0) return 0;

   return finalNumber
}

module.exports = solution;