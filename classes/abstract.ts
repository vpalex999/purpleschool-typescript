abstract class Controller {
  abstract handle(req: unknown): void;

  handleWithLogs(req: unknown) {
    console.log("Start");
    this.handle(req);
    console.log("end");
  }
}

// new Controller() - error

class UserController extends Controller {
  handle(req: unknown): void {
    console.log(req);
  }
}

const c = new UserController();

c.handle("1");
c.handleWithLogs("w");
