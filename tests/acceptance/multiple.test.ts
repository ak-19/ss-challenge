import { FindLettersAndPath } from '../../src/FindLettersAndPath';

describe('Multiple start points test set', () => {
    describe('Multiple start points example 1', () => {
        const a = [
            ' @--A-@-+',
            '        |',
            'x-B-+   C',
            '    |   |',
            '    +---+']

        test(`should throw errror: 'Multiple starting points found'`, () => {
            expect(() => new FindLettersAndPath(a).process()).toThrowError('Multiple starting points found');
        });
    });

    describe('Multiple start points example 2', () => {
        const a = [
            ' @--A---+',
            '        |',
            '        C',
            '        x',
            '    @-B-+'
        ];

        test(`should throw errror: 'Multiple starting points found'`, () => {
            expect(() => new FindLettersAndPath(a).process()).toThrowError('Multiple starting points found');
        });
    });

    describe('Multiple start points example 2', () => {
        const a = [
            ' @--A--X',
            '',
            'x-B-+',
            '    |',
            '    @'
        ];

        test(`should throw errror: 'Multiple starting points found'`, () => {
            expect(() => new FindLettersAndPath(a).process()).toThrowError('Multiple starting points found');
        });
    });
});