var UserService = /** @class */ (function () {
    function UserService(id) {
        UserService.db1 = id;
    }
    UserService.getUser = function (id) {
        return UserService.db;
    };
    UserService.prototype.create = function () { };
    UserService.prototype.getStaticDB = function () {
        return UserService.db;
    };
    UserService.prototype.getStaticDB1 = function () {
        return UserService.db1;
    };
    UserService.name = "dsd";
    (function () {
        UserService.db = "qwwqw";
    })();
    return UserService;
}());
UserService.db;
UserService.getUser(1);
var inst = new UserService(2);
inst.create();
console.log(inst.getStaticDB());
console.log(inst.getStaticDB1());
console.log(UserService.name);
