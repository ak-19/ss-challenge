import { Matrix } from "../../../src/Matrix";
import { Direction } from "../../../src/positions/Direction";
import { RegularMovePosition } from "../../../src/positions/RegularMovePosition";

describe('When regular move position (horizontal line) char on position (0,1) runs next', () => {
    const a = ['@--x'];
    const matrix = new Matrix(a);
    test('should return instance of RegularMovePosition with coordinates (0, 2) and same direction', () => {
        const direction = new Direction(0, 1);
        const position = new RegularMovePosition(0, 1, direction, matrix);
        expect(position).toBeInstanceOf(RegularMovePosition);
        const expectedNextPosition = new RegularMovePosition(0, 2, direction, matrix);
        expect(position.next().equals(expectedNextPosition)).toBeTruthy();
    });
});

describe('When regular move position (horizontal line) char on position (0,1) runs next and there is no next move', () => {
    const a = ['@- x'];
    const matrix = new Matrix(a);
    test('should throw error No path found', () => {
        const direction = new Direction(0, 1);
        const position = new RegularMovePosition(0, 1, direction, matrix);
        expect(position).toBeInstanceOf(RegularMovePosition);
        expect(() => position.next()).toThrowError('No path found');
    });
});

describe('When regular move position (horizontal line) char on position (0,1) runs next and there is no next move but there is pass through position', () => {
    const a = [' -A-x'];
    const direction = new Direction(0, 1);
    const matrix = new Matrix(a);    
    const expectedNextPosition = new RegularMovePosition(0, 2, direction, matrix)
    matrix.visit(expectedNextPosition);
    test('should return position (0, 2) since position behind is run through', () => {
        const direction = new Direction(0, 1);
        const position = new RegularMovePosition(0, 1, direction, matrix);
        expect(position).toBeInstanceOf(RegularMovePosition);
        expect(position.next().equals(expectedNextPosition)).toBeTruthy();
    });
});
