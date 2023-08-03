import { PositionSet } from "./PositionSet";
import { Position } from "./positions/Position";

export class Matrix {
    private processed: PositionSet = new PositionSet();
    constructor(private m: string[]) { }

    getCell(row: number, col: number) {
        return this.m[row][col];
    }

    getRow(row: number) {
        return this.m[row];
    }

    visit(position: Position) {
        this.processed.add(position);
    }

    visited(position: Position) {
        return this.processed.has(position);
    }
}