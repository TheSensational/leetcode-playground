class MyHashMap {
  constructor() {
    this.map = [];
  }
  put(key, value) {
    this.map[key] = value;
  }
  get(key) {
    let val = this.map[key];
    return val === undefined ? -1 : val;
  }
  remove(key) {
    delete this.map[key];
  }
}
