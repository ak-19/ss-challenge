
import { Matrix } from "../Matrix";
import { Direction } from "./Direction";

export abstract class Position {
    protected _char: string;
    constructor(protected _row: number, protected _col: number, protected direction: Direction, protected matrix: Matrix) {
        this._char = matrix.getCell(_row, _col);
    }

    get row() { return this._row; }
    get col() { return this._col; }

    equals(other: Position) {
        return this.row === other.row && this.col === other.col;
    }

    getCords() {
        return [this.row, this.col];
    }

    get visited(): boolean {
        return this.matrix.visited(this);
    }

    visit() {
        this.matrix.visit(this);
    }

    get char() { return this._char; }

    abstract next(): Position | undefined;
}