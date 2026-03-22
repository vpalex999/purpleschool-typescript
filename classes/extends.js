var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Payment = /** @class */ (function () {
    function Payment(id) {
        this.status = "new";
        this.id = id;
    }
    Payment.prototype.pay = function () {
        this.status = "paid";
    };
    return Payment;
}());
var PersistedPayment = /** @class */ (function (_super) {
    __extends(PersistedPayment, _super);
    function PersistedPayment() {
        var _this = this;
        var id = Math.random();
        _this = _super.call(this, id) || this;
        _this.databaseId = Math.random();
        _this.payIdAt = new Date();
        return _this;
    }
    PersistedPayment.prototype.save = function () { };
    PersistedPayment.prototype.pay = function (date) {
        _super.prototype.pay.call(this);
        if (date) {
            this.payIdAt = date;
        }
    };
    return PersistedPayment;
}(Payment));
var User = /** @class */ (function () {
    function User() {
        this.name = "user";
        console.log(this.name);
    }
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super.call(this) || this;
        _this.name = "admin";
        console.log(_this.name);
        return _this;
    }
    return Admin;
}(User));
new Admin();
// user
// admin
new Error("");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(msg, code) {
        var _this = _super.call(this, msg) || this;
        _this.code = code !== null && code !== void 0 ? code : 500;
        return _this;
    }
    return HttpError;
}(Error));
throw new HttpError("My error", 401);
