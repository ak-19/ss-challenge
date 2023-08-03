import { Position } from "./positions/Position";

export class PositionSet {
    private set: Set<Position> = new Set<Position>();

    add(position: Position) {
        this.set.add(position);
    }

    size() {
        return this.set.size;
    }

    has(position: Position) {
        for (let p of this.set) {
            if (position.equals(p)) return true;
        }
        return false;
    }

}