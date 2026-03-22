class Payment {
  private date: Date = new Date();

  getDate() {
    return this.date;
  }

  getDateWithThis(this: Payment) {
    return this.date;
  }

  getDateArrow = () => {
    return this.date;
  };
}

const p = new Payment();

const user = {
  id: 1,
  paymentDate: p.getDate.bind(p),
  paymentDateWithThis: p.getDateWithThis.bind(p),
  paymentDateArrow: p.getDateArrow,
};

// console.log(p.getDate());
// console.log(user.paymentDate());
// console.log(user.paymentDateWithThis());
// console.log(user.paymentDateArrow());

class PaymentPersistent extends Payment {
  save() {
    return this.getDateArrow();
  }
}

const np = new PaymentPersistent();

console.log(np.save());

class UserBuilder {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder {
    return this instanceof AdminBuilder;
  }
}

class AdminBuilder extends UserBuilder {
  roles: string[];
}

const res = new UserBuilder().setName("Vasia");
const res2 = new AdminBuilder().setName("Ola");

let user1: UserBuilder | AdminBuilder = new UserBuilder();

if (user1.isAdmin()) {
  console.log(user1);
} else {
  console.log(user1);
}
