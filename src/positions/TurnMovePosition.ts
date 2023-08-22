import { DIRECTIONS } from "./Direction";
import { Position } from "./Position";
import { PositionFactory } from "./PositionFactory";

export class TurnMovePosition extends Position {

    getDirectionPoint(): Position | undefined {
        const positions = this.getTurns();
        if (positions.length === 1) return positions[0];
        if (positions.length === 0) throw new Error('No path found');
        throw new Error('Multiple paths found');
    }

    getLeftOrRightTurn(positions: Position[]) {
        const [row, col] = this.getCords();
        const direction = this.direction;
        const left: Position | undefined = PositionFactory.createIfValid(row, col - 1, DIRECTIONS.LEFT, this.matrix);
        const right: Position | undefined = PositionFactory.createIfValid(row, col + 1, DIRECTIONS.RIGHT, this.matrix);
        if (this.definedUnvisited(left)) positions.push(left)
        if (this.definedUnvisited(right)) positions.push(right)

        if (positions.length === 0) {
            const leftLeft: Position | undefined = PositionFactory.createIfValid(row, col - 2 * direction.dc, DIRECTIONS.LEFT, this.matrix);
            if (leftLeft && left) positions.push(left)
            const rightRight: Position | undefined = PositionFactory.createIfValid(row, col + 2 * direction.dc, DIRECTIONS.RIGHT, this.matrix);
            if (rightRight && right) positions.push(right)
        }
    }

    getTopOrDownTurn(positions: Position[]) {
        const [row, col] = this.getCords();
        const direction = this.direction;
        const up: Position | undefined = PositionFactory.createIfValid(row - 1, col, DIRECTIONS.UP, this.matrix);
        const down: Position | undefined = PositionFactory.createIfValid(row + 1, col, DIRECTIONS.DOWN, this.matrix);
        if (this.definedUnvisited(up)) positions.push(up)
        if (this.definedUnvisited(down)) positions.push(down)

        if (positions.length === 0) {
            const upUp: Position | undefined = PositionFactory.createIfValid(row - 2 * direction.dr, col, DIRECTIONS.UP, this.matrix);
            if (upUp && up) positions.push(up)
            const downDown: Position | undefined = PositionFactory.createIfValid(row + 2 * direction.dr, col, DIRECTIONS.DOWN, this.matrix);
            if (downDown && down) positions.push(down)
        }
    }

    getTurns(): Position[] {
        const positions: Position[] = [];
        if (['UP', 'DOWN'].includes(this.direction.str)) this.getLeftOrRightTurn(positions);
        else this.getTopOrDownTurn(positions);
        return positions;
    }

    next(): Position | undefined {
        return this.getDirectionPoint();
    }
}
