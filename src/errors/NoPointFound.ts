export class NoPointFoundError extends Error {
    constructor(name: string) {
        super(`No ${name} point found`);
    }
}