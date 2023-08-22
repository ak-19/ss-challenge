import { DIRECTIONS } from "./Direction";
import { Position } from "./Position";
import { PositionFactory } from "./PositionFactory";


export class CharMovePosition extends Position {

    getTurns(): Position[] {
        const [row, col] = this.getCords();
        const direction = this.direction;
        const positions: Position[] = [];
        if (['UP', 'DOWN'].includes(direction.str)) {
            const left: Position | undefined = PositionFactory.createIfValid(row, col - 1, DIRECTIONS.LEFT, this.matrix);
            const right: Position | undefined = PositionFactory.createIfValid(row, col + 1, DIRECTIONS.RIGHT, this.matrix);
            if (this.definedUnvisited(left)) positions.push(left)
            if (this.definedUnvisited(right)) positions.push(right)
        } else {
            const up: Position | undefined = PositionFactory.createIfValid(row - 1, col, DIRECTIONS.UP, this.matrix);
            const down: Position | undefined = PositionFactory.createIfValid(row + 1, col, DIRECTIONS.DOWN, this.matrix);
            if (this.definedUnvisited(up)) positions.push(up)
            if (this.definedUnvisited(down)) positions.push(down)
        }

        return positions;
    }

    getDirectionPoint(): Position | undefined {
        const [row, col] = this.getCords();
        const direction = this.direction;
        const position = PositionFactory.createIfValid(row + direction.dr, col + direction.dc, direction, this.matrix);
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
