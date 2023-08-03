import { FindLettersAndPath } from '../../src/FindLettersAndPath';

describe('A missing start example', () => {
    const a = [
        '   -A---+',
        '        |',
        'x-B-+   C',
        '    |   |',
        '    +---+'];
    test(`should throw errror: 'No starting point found'`, () => {
        expect(() => new FindLettersAndPath(a).process()).toThrowError('No starting point found');
    });
});

describe('Missing end character', () => {
    const a = [
        '@--A---+',
        '       |',
        ' B-+   C',
        '   |   |',
        '   +--+'
    ];

    test(`should throw errror: 'No end point found'`, () => {
        expect(() => new FindLettersAndPath(a).process()).toThrowError('No end point found');
    });
});