"use strict";
exports.__esModule = true;
var ExpirationDate = /** @class */ (function () {
    function ExpirationDate(_expires) {
        this.expires = _expires;
    }
    ExpirationDate.prototype.getExpirationDate = function () {
        return this.expires.toString();
    };
    ExpirationDate.prototype.isExpired = function () {
        return new Date() >= this.expires;
    };
    return ExpirationDate;
}());
exports["default"] = ExpirationDate;
