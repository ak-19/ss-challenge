import { Direction } from "./Direction";
import { Position } from "./Position";
import { PositionFactory } from "./PositionFactory";


export class TurnMovePosition extends Position {

    getDirectionPoint(): Position | undefined {
        const positions = this.getTurns()
        if (positions.length === 1) return positions[0];
        if (positions.length === 0) throw new Error('No path found');
        throw new Error('Multiple paths found');
    }

    getTurns(): Position[] {
        const [row, col] = this.getCords();
        const d = this.direction;
        const positions: Position[] = [];
        if (['UP', 'DOWN'].includes(d.str)) {
            const left: Position | undefined = PositionFactory.createIfValid(row, col - 1, new Direction(0, -1), this.matrix);
            const right: Position | undefined = PositionFactory.createIfValid(row, col + 1, new Direction(0, 1), this.matrix);
            if (this.definedUnvisited(left)) positions.push(left)
            if (this.definedUnvisited(right)) positions.push(right)

            if (positions.length === 0) {
                const leftLeft: Position | undefined = PositionFactory.createIfValid(row, col - 2 * d.dc, new Direction(0, -1), this.matrix);
                if (leftLeft && left) positions.push(left)
                const rightRight: Position | undefined = PositionFactory.createIfValid(row, col + 2 * d.dc, new Direction(0, 1), this.matrix);
                if (rightRight && right) positions.push(right)
            }

        } else {
            const up: Position | undefined = PositionFactory.createIfValid(row - 1, col, new Direction(-1, 0), this.matrix);
            const down: Position | undefined = PositionFactory.createIfValid(row + 1, col, new Direction(1, 0), this.matrix);
            if (this.definedUnvisited(up)) positions.push(up)
            if (this.definedUnvisited(down)) positions.push(down)

            if (positions.length === 0) {
                const upUp: Position | undefined = PositionFactory.createIfValid(row - 2 * d.dr, col, new Direction(-1, 0), this.matrix);
                if (upUp && up) positions.push(up)
                const downDown: Position | undefined = PositionFactory.createIfValid(row + 2 * d.dr, col, new Direction(1, 0), this.matrix);
                if (downDown && down) positions.push(down)
            }
        }

        return positions;
    }

    next(): Position | undefined {
        return this.getDirectionPoint();
    }
}
