export default class Team {
  constructor() {
    this.members = new Set();
  }

  * [Symbol.iterator]() {
    const members = Array.from(this.members);
    let index = 0;

    while (index < members.length) {
      yield members[index];
      index += 1;
    }
  }

  addAll(...players) {
    players.forEach((item) => this.members.add(item));
  }
}
