class ExpirationDate {
    private expires: Date;
    constructor(_expires: Date) {
        this.expires = _expires;
    }
    public isExpired(): boolean {
        return new Date() <= this.expires;
    }
}

module.exports = ExpirationDate;