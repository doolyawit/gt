//interface
//stack
//queue
//generic type
interface Stack<T> {
  add(arr: T): void;
  remove(): void;
}

class GenericStack<T> implements Stack<T> {
  private arrs: T[];
  constructor(arrs: T[]) {
    this.arrs = arrs;
  }
  public add(arr: T): void {
    this.arrs.push(arr);
    console.log(`Add ${arr} to array!`);
    console.log(this.arrs);
  }
  public remove(): void {
    this.arrs.pop();
    console.log(`Remove last element sucessfully`);
    console.log(this.arrs);
  }
}

// (() => {
//   const stackString: Stack<string> = new GenericStack<string>([]);
//   stackString.add("dd");
//   stackString.add("ii");
//   stackString.add("ww");
//   stackString.add("xx");
//   stackString.remove();
// })();

(() => {
  const stackNumber: Stack<number> = new GenericStack<number>([]);
  stackNumber.add(3);
  stackNumber.add(10);
  stackNumber.add(333);
  stackNumber.remove();
})();

interface Queue<T> {
  add(arr: T): void;
  remove(): void;
}

class GenericQueue<T> implements Queue<T> {
  private arrs: T[];
  constructor(arrs: T[]) {
    this.arrs = arrs;
  }
  public add(arr: T): void {
    this.arrs.push(arr);
    console.log(`Add element ${arr} to array!`);
    console.log(this.arrs);
  }
  public remove(): void {
    this.arrs.shift();
    console.log(`Remove first element sucessfully`);
    console.log(this.arrs);
  }
}

// (() => {
//   const queueString: Queue<string> = new GenericQueue<string>([]);
//   queueString.add("dd");
//   queueString.add("ii");
//   queueString.add("ww");
//   queueString.add("xx");
//   queueString.remove();
// })();
