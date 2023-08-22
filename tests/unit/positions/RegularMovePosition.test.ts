import { Matrix } from "../../../src/Matrix";
import { DIRECTIONS } from "../../../src/positions/Direction";
import { RegularMovePosition } from "../../../src/positions/RegularMovePosition";

describe('When regular move position (horizontal line) char on position (0,1) runs next', () => {
    const a = ['@--x'];
    const matrix = new Matrix(a);
    test('should return instance of RegularMovePosition with coordinates (0, 2) and same direction', () => {
        const position = new RegularMovePosition(0, 1, DIRECTIONS.RIGHT, matrix);
        const expectedNextPosition = new RegularMovePosition(0, 2, DIRECTIONS.RIGHT, matrix);
        expect(position.next().equals(expectedNextPosition)).toBeTruthy();
    });
});

describe('When regular move position (horizontal line) char on position (0,1) runs next and there is no next move', () => {
    const a = ['@- x'];
    test('should throw error No path found', () => {
        const position = new RegularMovePosition(0, 1, DIRECTIONS.RIGHT, new Matrix(a));
        expect(() => position.next()).toThrowError('No path found');
    });
});

describe('When regular move position (horizontal line) char on position (0,1) runs next and there is no next move but there is pass through position', () => {
    const a = [' -A-x'];
    const matrix = new Matrix(a);    
    const expectedNextPosition = new RegularMovePosition(0, 2, DIRECTIONS.RIGHT, matrix)
    matrix.visit(expectedNextPosition);
    test('should return position (0, 2) since position behind is run through', () => {
        const position = new RegularMovePosition(0, 1, DIRECTIONS.RIGHT, matrix);
        expect(position.next().equals(expectedNextPosition)).toBeTruthy();
    });
});
