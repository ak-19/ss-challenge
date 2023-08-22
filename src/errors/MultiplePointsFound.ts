export class MultiplePointsFoundError extends Error {
    constructor(name: string) {
        super(`Multiple ${name} points found`);
    }
}