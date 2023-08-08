import FindLettersAndPath from "../../src/FindLettersAndPath";

describe('When undocumented char appears in path', () => {
    test('should throw error Unknown symbol type', () => {
        expect(() => {
            const a = [
                '@-#-A---+',
                '        |',
                'x-B-+   C',
                '    |   |',
                '    +---+'
            ];
            new FindLettersAndPath(a).process();
        }).toThrowError('Unknown symbol type');
    });
});