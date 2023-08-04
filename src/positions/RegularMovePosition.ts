import { Position } from "./Position";
import { PositionFactory } from "./PositionFactory";


export class RegularMovePosition extends Position {

    hasThroughPosition(position: Position): boolean {
        const [row, col] = this.getCords();
        const d = this.direction;
        const throughPosition = PositionFactory.createIfValid(row + d.dr * 2, col + d.dc * 2, d, this.matrix);
        return (position && this.definedUnvisited(throughPosition));
    }

    getDirectionPoint(): Position | undefined {
        const [row, col] = this.getCords();
        const d = this.direction;
        const position = PositionFactory.createIfValid(row + d.dr, col + d.dc, d, this.matrix);
        if (this.definedUnvisited(position)) return position;
        if (this.hasThroughPosition(position)) return position;
        throw new Error('No path found');
    }

    next(): Position | undefined {
        return this.getDirectionPoint();
    }
}
