import { FindLettersAndPath } from '../../src/FindLettersAndPath';

describe('A basic valid example when processed', () => {
    const a =
        ['@---A---+',
            '        |',
            'x-B-+   C',
            '    |   |',
            '    +---+'];
    test(`should return:
            1. Letters ACB
            2. Path as characters @---A---+|C|+---+|+-B-x`, () => {
        const finderInstance = new FindLettersAndPath(a);
        finderInstance.process();
        expect(finderInstance.get()).toStrictEqual({ letters: 'ACB', path: '@---A---+|C|+---+|+-B-x' });
    });
});

describe('A basic valid example with letter on turn', () => {
    const a = [
        '@---A---+',
        '        |',
        'x-B-+   |',
        '    |   |',
        '    +---C'
    ];
    test(`should return:
            1. Letters ACB
            2. Path as characters @---A---+|||C---+|+-B-x`, () => {
        const finderInstance = new FindLettersAndPath(a);
        finderInstance.process();
        expect(finderInstance.get()).toStrictEqual({ letters: 'ACB', path: '@---A---+|||C---+|+-B-x' });
    });
});

describe('A valid example with go through', () => {
    const a = [
        '@',
        '| +-C--+',
        'A |    |',
        '+---B--+',
        '  |      x',
        '  |      |',
        '  +---D--+'
    ];
    test(`should return: 
           letters ABCD and 
           path as characters @|A+---B--+|+--C-+|-||+---D--+|x`, () => {
        const finderInstance = new FindLettersAndPath(a);
        finderInstance.process();
        expect(finderInstance.get()).toStrictEqual({ letters: 'ABCD', path: '@|A+---B--+|+--C-+|-||+---D--+|x' });
    });
});



