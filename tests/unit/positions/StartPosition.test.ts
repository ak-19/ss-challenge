import { Matrix } from "../../../src/Matrix";
import { SingleCharFinder } from "../../../src/SingleCharFinder";
import { Direction } from "../../../src/positions/Direction";
import { RegularMovePosition } from "../../../src/positions/RegularMovePosition";
import { StartPosition } from "../../../src/positions/StartPosition";

describe('When start char on position (0,0) runs next', () => {
    const a = ['@--x'];
    const matrix = new Matrix(a);
    test('should return instance of RegularMovePosition with coordinates (0, 1)', () => {
        const startPosition = new SingleCharFinder('@').findOrThrow(matrix);
        const expectedNextPosition = new RegularMovePosition(0, 1, new Direction(0, 1), matrix);
        expect(startPosition).toBeInstanceOf(StartPosition);
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
        const startPosition = new SingleCharFinder('@').findOrThrow(matrix);
        expect(startPosition).toBeInstanceOf(StartPosition);
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
        const startPosition = new SingleCharFinder('@').findOrThrow(matrix);
        expect(startPosition).toBeInstanceOf(StartPosition);
        expect(() => startPosition.next()).toThrowError('No path found');
    });
});