/**
 * Complete the solution so that it returns true
 * if the first argument(string) passed in ends with
 * the 2nd argument (also a string).
 *
 * examples
 *
 * solution('abc', 'bc') // returns true
 * solution('abc', 'd') // returns false
 */

const solution = (phrase, endWith) => {
    const lastLetters = phrase.slice(phrase.length - endWith.length)

    return !!lastLetters.includes(endWith);
}

module.exports = solution