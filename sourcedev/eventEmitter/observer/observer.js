export class Observer {
  constructor(name) {
    this.name = name;
  }

  update() {
    console.log(`${this.name} updated`);
  }
}