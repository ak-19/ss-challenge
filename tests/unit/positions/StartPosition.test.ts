import { Matrix } from "../../../src/Matrix";
import { SingleCharFinder } from "../../../src/SingleCharFinder";
import { DIRECTIONS } from "../../../src/positions/Direction";
import { RegularMovePosition } from "../../../src/positions/RegularMovePosition";

describe('When start char on position (0,0) runs next', () => {
    const a = ['@--x'];
    const matrix = new Matrix(a);
    test('should return instance of RegularMovePosition with coordinates (0, 1)', () => {
        const startPosition = new SingleCharFinder(matrix).findStart();
        const expectedNextPosition = new RegularMovePosition(0, 1, DIRECTIONS.RIGHT, matrix);
        expect(startPosition.next().equals(expectedNextPosition)).toBeTruthy();
    });
});

describe('When start char on position (0,0) runs next and there are mutiple paths', () => {
    const a = [
        '@--x',
        '|-'
    ];
    const matrix = new Matrix(a);
    test('should throw error Multiple paths found', () => {
        const startPosition = new SingleCharFinder(matrix).findStart();
        expect(() => startPosition.next()).toThrowError('Multiple paths found');
    });
});


describe('When start char on position (0,0) runs next and there are no paths', () => {
    const a = [
        '@ -x',
        ' -'
    ];
    const matrix = new Matrix(a);
    test('should throw error No path found', () => {
        const startPosition =new SingleCharFinder(matrix).findStart();
        expect(() => startPosition.next()).toThrowError('No path found');
    });
});