class UserService {
  static db: unknown;
  private static db1: unknown;

  static getUser(id: number) {
    return UserService.db;
  }

  create() {}

  getStaticDB() {
    return UserService.db;
  }

  getStaticDB1() {
    return UserService.db1;
  }

  constructor(id: number) {
    UserService.db1 = id;
  }

  static {
    UserService.db = "qwwqw";
  }
}

UserService.db;
UserService.getUser(1);

const inst = new UserService(2);
inst.create();

console.log(inst.getStaticDB());
console.log(inst.getStaticDB1());
