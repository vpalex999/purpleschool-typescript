/*
  Реализовать абстрактный класс Logger с 2-мя методами.
  - абстрактный: log(message): void;
  - выводящий в log дату: printDate;

  К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
  выводящий сначала дату, а потом сообщение.
*/
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
var AbstractLog = /** @class */ (function () {
    function AbstractLog() {
    }
    AbstractLog.prototype.printDate = function (date) {
        console.log(date.toString());
    };
    return AbstractLog;
}());
var Log = /** @class */ (function (_super) {
    __extends(Log, _super);
    function Log() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Log.prototype.log = function (message) {
        console.log(message);
    };
    Log.prototype.logWithDate = function (message) {
        this.printDate(new Date());
        this.log(message);
    };
    return Log;
}(AbstractLog));
var logger = new Log();
logger.logWithDate("hello");
