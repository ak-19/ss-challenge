import { Position } from "./Position";

export class EndPosition extends Position {    

    next(): Position | undefined {
        return undefined;
    }
}
    