import { FindLettersAndPath } from '../../src/FindLettersAndPath';

describe('An example with letters being more then once on turn, when processed', () => {
    const a = [
        '    +-O-N-+',
        '    |     |',
        '    |   +-I-+',
        '@-G-O-+ | | |',
        '    | | +-+ E',
        '    +-+     S',
        '            |',
        '            x'
    ];
    test(`should avoid collecting same letter twice and return:
            1. Letters GOONIES
            2. Path as characters @-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x`, () => {
        const finderInstance = new FindLettersAndPath(a);
        finderInstance.process();
        expect(finderInstance.get()).toStrictEqual({ letters: 'GOONIES', path: '@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x' });
    });
});

describe('An example with compact space and many turns, when processed', () => {
    const a = [
        ' +-L-+',
        ' |  +A-+',
        '@B+ ++ H',
        ' ++    x'
    ];
    test(`should return:
            1. Letters BLAH
            2. Path as characters @B+++B|+-L-+A+++A-+Hx`, () => {
        const finderInstance = new FindLettersAndPath(a);
        finderInstance.process();
        expect(finderInstance.get()).toStrictEqual({ letters: 'BLAH', path: '@B+++B|+-L-+A+++A-+Hx' });
    });
});

describe('An example with content after end of the path, when processed', () => {
    const a = [
        '@-A--+',
        '     |',
        '     +-B--x-C--D'
    ];
    test(`should ignore content after path and return:
            1. Letters AB
            2. Path as characters @-A--+|+-B--x`, () => {
        const finderInstance = new FindLettersAndPath(a);
        finderInstance.process();
        expect(finderInstance.get()).toStrictEqual({ letters: 'AB', path: '@-A--+|+-B--x' });
    });
});

