import { Matrix } from "../../../src/Matrix";
import { Direction } from "../../../src/positions/Direction";
import { RegularMovePosition } from "../../../src/positions/RegularMovePosition";
import { TurnMovePosition } from "../../../src/positions/TurnMovePosition";

describe('When turn move position (+) char on position (0,3) and direction (RIGHT) runs next', () => {
    const a = [
        '@--+',
        '   |',
        'x--+'
    ];
    const matrix = new Matrix(a);
    test('should return instance of RegularMovePosition with coordinates (1, 3) and with different direction (DOWN)', () => {
        const position = new TurnMovePosition(0, 3, new Direction(0, 1), matrix);
        expect(position).toBeInstanceOf(TurnMovePosition);
        expect(position.Direction.str).toBe('RIGHT');
        const expectedNextPosition = new RegularMovePosition(1, 3, new Direction(1, 0), matrix);
        const gotNextPosition = position.next();
        expect(gotNextPosition.equals(expectedNextPosition)).toBeTruthy();
        expect(gotNextPosition.Direction.str).toBe('DOWN');
    });
});


describe('When turn move position (+) char on position (1,3) and direction (RIGHT) runs next and there are mutiple paths', () => {
    const a = [
        '   |',
        '@--+',
        '   |',
    ];
    const matrix = new Matrix(a);
    test('should throw error multiple paths found', () => {
        const position = new TurnMovePosition(1, 3, new Direction(0, 1), matrix);
        expect(position).toBeInstanceOf(TurnMovePosition);
        expect(() => position.next()).toThrowError('Multiple paths found');
    });
});

describe('When turn move position (+) char on position (0,3) runs next and there are no paths', () => {
    const a = [
        '@--+',
    ];
    const matrix = new Matrix(a);
    test('should throw error No path found', () => {
        const position = new TurnMovePosition(0, 3, new Direction(0, 1), matrix);
        expect(position).toBeInstanceOf(TurnMovePosition);
        expect(() => position.next()).toThrowError('No path found');
    });
});