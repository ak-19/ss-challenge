import { Position } from "./Position";
import { Direction } from "./Direction";
import { Matrix } from "../Matrix";
import { StartPosition } from "./StartPosition";
import { EndPosition } from "./EndPosition";

export class PositionFactory {
    static create(row: number, col: number, direction: Direction, matrix: Matrix) {
        if (matrix.getCell(row, col) === '@') return new StartPosition(row, col, direction, matrix);
        if (matrix.getCell(row, col) === 'x') return new EndPosition(row, col, direction, matrix);        
        return undefined;
    }

    static createIfValid(row: number, col: number, direction: Direction, matrix: Matrix): Position | undefined {
        if (PositionFactory.valid(matrix, row, col)) return PositionFactory.create(row, col, direction, matrix);
        return undefined;
    }

    static valid(matrix: Matrix, row: number, col: number): boolean {
        if (row < 0 || row >= matrix.getRowsLength()) return false;
        if (col < 0 || col >= matrix.getRow(row).length) return false;
        if (matrix.getCell(row, col) === ' ') return false;
        return true;
    }
}