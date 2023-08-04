import { Direction } from "./Direction";
import { Position } from "./Position";
import { PositionFactory } from "./PositionFactory";


export class CharMovePosition extends Position {    

    getTurns(): Position[] {
        const [row, col] = this.getCords();
        const d = this.direction;
        const positions: Position[] = [];
        if (['UP','DOWN'].includes(d.str)) {
            const left: Position | undefined = PositionFactory.createIfValid(row, col - 1, new Direction(0, -1), this.matrix);
            const right: Position | undefined = PositionFactory.createIfValid(row, col + 1, new Direction(0, 1), this.matrix);            
            if (this.definedUnvisited(left)) positions.push(left)
            if (this.definedUnvisited(right)) positions.push(right)            
        } else {
            const up: Position | undefined = PositionFactory.createIfValid(row - 1, col, new Direction(-1, 0), this.matrix);
            const down: Position | undefined = PositionFactory.createIfValid(row + 1, col, new Direction(1, 0), this.matrix);
            if (this.definedUnvisited(up)) positions.push(up)
            if (this.definedUnvisited(down)) positions.push(down)
        }

        return positions;
    }

    getDirectionPoint(): Position | undefined {
        const [row, col] = this.getCords();
        const d = this.direction;
        const position = PositionFactory.createIfValid(row+d.dr, col+d.dc, d, this.matrix);
        if (this.definedUnvisited(position)) return position;

        const turnPositions = this.getTurns();

        if (turnPositions.length === 1) return turnPositions[0];
        if (turnPositions.length === 0) throw new Error('No path found');
        throw new Error('Multiple paths found');
    }

    next(): Position | undefined {
        return this.getDirectionPoint();
    }
}
    