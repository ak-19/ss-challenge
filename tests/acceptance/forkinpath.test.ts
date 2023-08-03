import { FindLettersAndPath } from '../../src/FindLettersAndPath';

describe('A fork in path with 2 ends example', () => {
    const a = [
            '     x-B',
            '       |',
            '@--A---+',
            '       |',
            '  x+   C',
            '   |   |',
            '   +---+'
        ];
    test(`should throw errror: 'Multiple ending points found'`, () => {
        expect(() => new FindLettersAndPath(a).process()).toThrowError('Multiple ending points found');
    });
});

describe('A fork in path with single end example', () => {
    const a = [
            '      -B',
            '       |',
            '@--A---+',
            '       |',
            '  x+   C',
            '   |   |',
            '   +---+'
        ];
    test(`should throw errror: 'Multiple paths found'`, () => {
        expect(() => new FindLettersAndPath(a).process()).toThrowError('Multiple paths found');
    });
});

describe('Multiple paths from start with 2 end points example', () => {
    const a = [ 'x-B-@-A-x',];
    test(`should throw errror: 'Multiple ending points found'`, () => {
        expect(() => new FindLettersAndPath(a).process()).toThrowError('Multiple ending points found');
    });
});

describe('Multiple paths from start with single end point example', () => {
    const a = [ 'x-B-@-A-',];
    test(`should throw errror: 'Multiple paths found'`, () => {
        expect(() => new FindLettersAndPath(a).process()).toThrowError('Multiple paths found');
    });
});