const solution = require('../../codes/multiple3Or5.challenge')

it('should be return quantity multiples by 3 or 5', () => {
    expect(solution(10)).toBe(23)
});

it('should be return 0 when multiple is below than 0', () => {
    expect(solution(-39)).toBe(0)
});