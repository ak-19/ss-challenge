import { Matrix } from "./Matrix";
import { SingleCharFinder } from "./SingleCharFinder";
import { Position } from "./positions/Position";

export class FindLettersAndPath {
    private letters: string[];
    private path: string[];
    private matrix: Matrix;
    private finder: SingleCharFinder;

    constructor(input: string[]) {
        this.letters = [];
        this.path = [];
        this.matrix = new Matrix(input);
        this.finder = new SingleCharFinder(this.matrix);
    }

    private notVisitedChar(position: Position): boolean {
        return !position.visited && /[A-Z]/.test(position.char);
    }

    private visitAndMove(position: Position) {
        position.visit();
        return position.next();
    }

    process() {
        let curr: Position = this.finder.findStart();
        this.finder.findEnd();

        while (curr) {
            this.path.push(curr.char);
            if (this.notVisitedChar(curr)) this.letters.push(curr.char);
            curr = this.visitAndMove(curr);
        }
    }

    get() {
        return {
            letters: this.letters.join(''),
            path: this.path.join('')
        }
    }
}

export default FindLettersAndPath;