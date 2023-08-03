import { FindLettersAndPath } from '../../src/FindLettersAndPath';

describe('A broken path example with vertical direction', () => {
    const a = [
        '@--A-+',
        '     |',
        '      ',
        '     B-x'
    ];
    test(`should throw errror: 'No path found'`, () => {
        expect(() => new FindLettersAndPath(a).process()).toThrowError('No path found');
    });
});


describe('A broken path example horizontal direction', () => {
    const a = [
        '@--A-',
        '     |',
        '     B-x'
    ];
    test(`should throw errror: 'No path found'`, () => {
        expect(() => new FindLettersAndPath(a).process()).toThrowError('No path found');
    });
});