import { Matrix } from "./Matrix";
import { Direction } from "./positions/Direction";
import { Position } from "./positions/Position";
import { PositionFactory } from "./positions/PositionFactory";
import { START_CHARACTER, END_CHARACTER, ConstantToWord } from './constants'
import { NoPointFoundError } from "./errors/NoPointFound";
import { MultiplePointsFoundError } from "./errors/MultiplePointsFound";

export class SingleCharFinder {
    private char: string = undefined
    constructor(private a: Matrix) { }

    private setChar(char: string): SingleCharFinder {
        this.char = char;
        return this;
    }

    findStart = () => this.setChar(START_CHARACTER).findOrThrow()
    findEnd = () => this.setChar(END_CHARACTER).findOrThrow()

    private findOrThrow() {
        const points: Position[] = [];
        this.findInAllRows(points);
        if (points.length === 1) return points[0];
        throw new NoPointFoundError(ConstantToWord[this.char]);
    }

    private findInAllRows(points: Position[]) {
        for (let row = 0; row < this.a.getRowsLength(); row++) this.findInCurrentRow(points, row);
    }

    private findInCurrentRow(points: Position[], row: number) {
        const col = this.a.getRow(row).indexOf(this.char);
        if (col == -1) return;
        this.throwIfPointAlreadyFound(points);
        this.throwIfAnotherPointInRowExists(row, col);
        this.addPointToResultIfValid(row, col, points);
    }

    private addPointToResultIfValid(row: number, col: number, starts: Position[]) {
        const pos = PositionFactory.create(row, col, new Direction(0, 0), this.a);
        if (pos) starts.push(pos);
    }

    private throwIfPointAlreadyFound(points: Position[]) {
        if (points.length > 0) throw new MultiplePointsFoundError(ConstantToWord[this.char]);
    }

    private throwIfAnotherPointInRowExists(row: number, col: number) {
        const nextCol = this.a.getRow(row).indexOf(this.char, col + 1);
        if (nextCol > -1) throw new MultiplePointsFoundError(ConstantToWord[this.char]);
    }
}