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

    private findStart() {
        try {
            this.finder.setChar('@');
            return this.finder.findOrThrow(this.a);
        } catch (error: any) {
            if (error.message === 'Not found') throw new Error('No starting point found');
            if (error.message == 'Multiple found') throw new Error('Multiple starting points found');
            throw error;
        }
    }

    private findEnd() {
        try {
            this.finder.setChar('x');
            return this.finder.findOrThrow(this.a);
        } catch (error: any) {
            if (error.message === 'Not found') throw new Error('No end point found');
            if (error.message == 'Multiple found') throw new Error('Multiple ending points found');
            throw error;
        }
    }

    process() {
        this.findStart();
        this.findEnd();
    }

    get() {
        return {
            letters: this.letters.join(''),
            path: this.path.join('')
        }
    }
}

export default FindLettersAndPath;