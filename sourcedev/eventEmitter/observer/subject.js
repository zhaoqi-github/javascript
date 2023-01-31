export class Subject {
  constructor() {
    this.observers = [];
  }

  add(observer) {
    this.observers.push(observer);
  }

  remove(observer) {
    const idx = this.observers.findIndex(itm => itm === observer);
    if (idx !== -1) {
      this.observers.splice(idx, 1);
    }
  }

  notify() {
    this.observers.forEach(observer => {
      if (observer && typeof observer?.update === 'function') {
        observer.update();
      }
    });
  }
}