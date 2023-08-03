import { FindLettersAndPath } from '../../src/FindLettersAndPath';

describe('Fake turn example', () => {
    const a = [ '@-A-+-B-x',];
    test(`should throw errror: 'No path found'`, () => {
        expect(() => new FindLettersAndPath(a).process()).toThrowError('No path found');
    });
});