import { Matrix } from "../../../src/Matrix";
import { CharMovePosition } from "../../../src/positions/CharMovePosition";
import { DIRECTIONS } from "../../../src/positions/Direction";
import { RegularMovePosition } from "../../../src/positions/RegularMovePosition";

describe('When Char move on position (0,2) and direction (RIGHT) runs next', () => {
    const a = [ '@-C-' ];
    const matrix = new Matrix(a);
    test('should return instance of RegularMovePosition with coordinates (0, 3) and with same direction (RIGHT)', () => {
        const direction = DIRECTIONS.RIGHT;
        const position = new CharMovePosition(0, 2, direction, matrix);
        const expectedNextPosition = new RegularMovePosition(0, 3, direction, matrix);
        expect(position.next().equals(expectedNextPosition)).toBeTruthy();
    });
});

describe('When Char move on position (0,2) and direction (RIGHT) runs next and there is no same direction next but there is down turn', () => {
    const a = [
         '@-C', 
         '--|' 
    ];
    const matrix = new Matrix(a);
    test('should return instance of RegularMovePosition with coordinates (1, 2) and with direction (DOWN)', () => {
        const position = new CharMovePosition(0, 2, DIRECTIONS.RIGHT, matrix);
        const expectedNextPosition = new RegularMovePosition(1, 2, DIRECTIONS.DOWN, matrix);
        const gotNextPosition = position.next();  
        expect(gotNextPosition.equals(expectedNextPosition)).toBeTruthy();
    });
});

describe('When Char move position on position (0,3) runs next and there are no paths', () => {
    const a = [
        '@--C',
    ];
    const matrix = new Matrix(a);
    test('should throw error No path found', () => {
        const position = new CharMovePosition(0, 3, DIRECTIONS.RIGHT, matrix);
        expect(() => position.next()).toThrowError('No path found');
    });
});

