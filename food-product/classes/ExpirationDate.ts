export default class ExpirationDate {
    private expires: Date;
    constructor(_expires: Date) {
        this.expires = _expires;
    }
    public getExpirationDate(): string {
        return this.expires.toString();
    }
    public isExpired(): boolean {
        return new Date() >= this.expires;
    }
}