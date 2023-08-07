import { Matrix } from "../../src/Matrix";
import { SingleCharFinder } from "../../src/SingleCharFinder";
import { Direction } from "../../src/positions/Direction";
import { StartPosition } from "../../src/positions/StartPosition";

describe('When single valid start char is present in input matrix at position (0,0)', () => {
    const a = ['@--x'];
    const matrix = new Matrix(a);
    test('should return instance of position with that coordinates', () => {
        const foundPosition = new SingleCharFinder('@').findOrThrow(matrix);
        const expectedPosition = new StartPosition(0, 0, new Direction(0, 1), matrix);
        expect(foundPosition.equals(expectedPosition)).toBeTruthy();
    });
});

describe('When no valid start char is present in input matrix', () => {
    const a = ['--x'];
    const matrix = new Matrix(a);
    test('should throw error Not found', () => {        
        expect(() => new SingleCharFinder('@').findOrThrow(matrix)).toThrow('Not found');
    });
});

describe('When multiple start chars are present in input matrix', () => {
    const a = ['@--@'];
    const matrix = new Matrix(a);
    test('should throw error Multiple found', () => {        
        expect(() => new SingleCharFinder('@').findOrThrow(matrix)).toThrow('Multiple found');
    });
});


describe('When single valid end char is present in input matrix at position (0,0)', () => {
    const a = ['x----@'];
    const matrix = new Matrix(a);
    test('should return instance of position with that coordinates', () => {
        const foundPosition = new SingleCharFinder('x').findOrThrow(matrix);
        const expectedPosition = new StartPosition(0, 0, new Direction(0, 1), matrix);
        expect(foundPosition.equals(expectedPosition)).toBeTruthy();
    });
});

describe('When no valid end char is present in input matrix', () => {
    const a = ['--@'];
    const matrix = new Matrix(a);
    test('should throw error Not found', () => {        
        expect(() => new SingleCharFinder('x').findOrThrow(matrix)).toThrow('Not found');
    });
});

describe('When multiple end chars are present in input matrix', () => {
    const a = ['x--x'];
    const matrix = new Matrix(a);
    test('should throw error Multiple found', () => {        
        expect(() => new SingleCharFinder('x').findOrThrow(matrix)).toThrow('Multiple found');
    });
});