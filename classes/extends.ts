type PaymentStatus = "new" | "paid";

class Payment {
  id: number;
  status: PaymentStatus = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

class PersistedPayment extends Payment {
  databaseId: number;
  payIdAt: Date;

  constructor() {
    const id = Math.random();
    super(id);
    this.databaseId = Math.random();
    this.payIdAt = new Date();
  }

  save() {}

  override pay(date?: Date): void {
    super.pay();

    if (date) {
      this.payIdAt = date;
    }
  }
}

class User {
  name: string = "user";

  constructor() {
    console.log(this.name);
  }
}

class Admin extends User {
  name: string = "admin";

  constructor() {
    super();
    console.log(this.name);
  }
}

new Admin();
// user
// admin

new Error("");

class HttpError extends Error {
  code: number;

  constructor(msg: string, code?: number) {
    super(msg);
    this.code = code ?? 500;
  }
}

throw new HttpError("My error", 401);
