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
    function Payment() {
        var _this = this;
        this.date = new Date();
        this.getDateArrow = function () {
            return _this.date;
        };
    }
    Payment.prototype.getDate = function () {
        return this.date;
    };
    Payment.prototype.getDateWithThis = function () {
        return this.date;
    };
    return Payment;
}());
var p = new Payment();
var user = {
    id: 1,
    paymentDate: p.getDate.bind(p),
    paymentDateWithThis: p.getDateWithThis.bind(p),
    paymentDateArrow: p.getDateArrow,
};
// console.log(p.getDate());
// console.log(user.paymentDate());
// console.log(user.paymentDateWithThis());
// console.log(user.paymentDateArrow());
var PaymentPersistent = /** @class */ (function (_super) {
    __extends(PaymentPersistent, _super);
    function PaymentPersistent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaymentPersistent.prototype.save = function () {
        return this.getDateArrow();
    };
    return PaymentPersistent;
}(Payment));
var np = new PaymentPersistent();
console.log(np.save());
