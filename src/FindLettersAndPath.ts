export class FindLettersAndPath {
    private letters: string[];
    private path: string[];
    constructor(private input: string[]) {
        this.letters = [];
        this.path = [];
    }

    process() {
        if (this.input.length === 0) {
            return;
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