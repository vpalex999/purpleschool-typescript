/*
  Реализовать абстрактный класс Logger с 2-мя методами.
  - абстрактный: log(message): void;
  - выводящий в log дату: printDate;

  К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
  выводящий сначала дату, а потом сообщение.
*/

abstract class AbstractLog {
  abstract log(message: string): void;

  printDate(date: Date) {
    console.log(date.toString());
  }
}

class Log extends AbstractLog {
  log(message: string) {
    console.log(message);
  }

  logWithDate(message: string) {
    this.printDate(new Date());
    this.log(message);
  }
}

const logger = new Log();

logger.logWithDate("hello");
