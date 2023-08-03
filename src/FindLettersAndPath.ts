import { Matrix } from "./Matrix";
import { SingleCharFinder } from "./SingleCharFinder";

export class FindLettersAndPath {
    private letters: string[];
    private path: string[];
    private a: Matrix;
    private finder: SingleCharFinder;

    constructor(input: string[]) {
        this.letters = [];
        this.path = [];
        this.a = new Matrix(input);
        this.finder = new SingleCharFinder('@');
    }

    process() {
        this.finder.setChar('@');
        this.finder.findOrThrow(this.a);
    }

    get() {
        return {
            letters: this.letters.join(''),
            path: this.path.join('')
        }
    }
}

export default FindLettersAndPath;