#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      this.width = w;
      this.height = h;
      if (this.width <= 0 || this.height <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        return {};
    }
    }
  }
  
  module.exports = Rectangle;
