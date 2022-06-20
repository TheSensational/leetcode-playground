class BrowserHistory {
  constructor(homePage) {
    this.cur = 1;
    this.history = [homePage];
  }

  visit(url) {
    if (this.cur !== this.history.length) {
      this.history = this.history.slice(0, this.cur);
    }
    this.cur++;
    this.history.push(url);
  }

  back(steps) {
    if (this.cur - steps < 1) {
      this.cur = 1;
    } else {
      this.cur -= steps;
    }
    return this.history[this.cur - 1];
  }

  forward(steps) {
    if (this.cur + steps > this.history.length) {
      this.cur = this.history.length;
    } else {
      this.cur += steps;
    }
    return this.history[this.cur - 1];
  }
}
