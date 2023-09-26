const solution = require('../../codes/endWIth.challenge')

it('should be return true case finalize with determined letter', () => {
    expect(solution('abcde', 'cde')).toBeTruthy();
});

it('should be return false case finalize with another letter', () => {
    expect(solution('abcde', 'abc')).not.toBeTruthy()
}); 