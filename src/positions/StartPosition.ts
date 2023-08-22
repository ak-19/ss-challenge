import { DIRECTIONS } from "./Direction";
import { Position } from "./Position";
import { PositionFactory } from "./PositionFactory";

export class StartPosition extends Position {

    next(): Position | undefined {
        const positions = this.getDirectionPoints();
        if (positions.length === 1) return positions[0];
        if (positions.length === 0) throw new Error('No path found');
        throw new Error('Multiple paths found');
    }
    
    private getDirectionPoints(): Position[] {
        const [row, col] = this.getCords();
        const positions: Position[] = [];
        const up: Position | undefined = PositionFactory.createIfValid(row - 1, col, DIRECTIONS.UP, this.matrix);
        const down: Position | undefined = PositionFactory.createIfValid(row + 1, col, DIRECTIONS.DOWN, this.matrix);
        const left: Position | undefined = PositionFactory.createIfValid(row, col - 1, DIRECTIONS.LEFT, this.matrix);
        const right: Position | undefined = PositionFactory.createIfValid(row, col + 1, DIRECTIONS.RIGHT, this.matrix);
        if (this.definedUnvisited(up)) positions.push(up)
        if (this.definedUnvisited(down)) positions.push(down)
        if (this.definedUnvisited(left)) positions.push(left)
        if (this.definedUnvisited(right)) positions.push(right)

        return positions;
    }
}
