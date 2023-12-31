import { Position } from "./Position";
import { PositionFactory } from "./PositionFactory";


export class RegularMovePosition extends Position {

    hasThroughPosition(position: Position): boolean {
        const [row, col] = this.getCords();
        const direction = this.direction;
        const throughPosition = PositionFactory.createIfValid(row + direction.dr * 2, col + direction.dc * 2, direction, this.matrix);
        return (position && this.definedUnvisited(throughPosition));
    }

    getDirectionPoint(): Position | undefined {
        const [row, col] = this.getCords();
        const direction = this.direction;
        const position = PositionFactory.createIfValid(row + direction.dr, col + direction.dc, direction, this.matrix);
        if (this.definedUnvisited(position)) return position;
        if (this.hasThroughPosition(position)) return position;
        throw new Error('No path found');
    }

    next(): Position | undefined {
        return this.getDirectionPoint();
    }
}
