interface ILogger {
  log(...args): void;
  error(...args): void;
}

class Logger implements ILogger {
  log(...args: any[]): void {
    throw new Error("Method not implemented.");
  }
  async error(...args: any[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

interface IDeletable {
  delete(): void;
}

class User implements IPayable, IDeletable {
  delete(): void {
    throw new Error('Method not implemented.');
  }
  pay(paymentId: number): void {
    throw new Error("Method not implemented.");
  }
  price?: number;
}
