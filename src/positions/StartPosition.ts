import { Direction } from "./Direction";
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
        const up: Position | undefined = PositionFactory.createIfValid(row - 1, col, new Direction(-1, 0), this.matrix);
        const down: Position | undefined = PositionFactory.createIfValid(row + 1, col, new Direction(1, 0), this.matrix);
        const left: Position | undefined = PositionFactory.createIfValid(row, col - 1, new Direction(0, -1), this.matrix);
        const right: Position | undefined = PositionFactory.createIfValid(row, col + 1, new Direction(0, 1), this.matrix);
        if (this.definedUnvisited(up)) positions.push(up)
        if (this.definedUnvisited(down)) positions.push(down)
        if (this.definedUnvisited(left)) positions.push(left)
        if (this.definedUnvisited(right)) positions.push(right)

        return positions;
    }
}
