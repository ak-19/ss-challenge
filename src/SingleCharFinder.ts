import { Matrix } from "./Matrix";
import { Direction } from "./positions/Direction";
import { Position } from "./positions/Position";
import { PositionFactory } from "./positions/PositionFactory";

export class SingleCharFinder {
    constructor(private char: string) { }

    setChar(char: string): SingleCharFinder {
        this.char = char;
        return this;
    }

    findOrThrow(a: Matrix) {
        const starts: Position[] = [];
        for (let row = 0; row < a.getRowsLength(); row++) this.findIfExists(starts, row, a);
        if (starts.length === 1) return starts[0];
        throw new Error(`Not found`);
    }

    private findIfExists(starts: Position[], row: number, a: Matrix) {
        const col = a.getRow(row).indexOf(this.char);
        if (col > -1) {
            if (starts.length > 0) throw new Error('Multiple found');
            const nextCol = a.getRow(row).indexOf(this.char, col + 1);
            if (nextCol > -1) throw new Error('Multiple found');
            const pos = PositionFactory.create(row, col, new Direction(0, 0), a);
            if (pos) starts.push(pos);
        }
    }
}