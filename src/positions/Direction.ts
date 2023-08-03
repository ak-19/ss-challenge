export class Direction {
    constructor(public dr: number, public dc: number) { }

    get str() {
        if (this.dr === 0 && this.dc === 1) return 'RIGHT';
        if (this.dr === 0 && this.dc === -1) return 'LEFT';
        if (this.dr === 1 && this.dc === 0) return 'DOWN';
        if (this.dr === -1 && this.dc === 0) return 'UP';
        return 'UNKNOWN';
    }
}