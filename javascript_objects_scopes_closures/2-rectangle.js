#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      this.width = w;
      this.height = h;
      if (this.width <= 0 || this.height <= 0){
            const obj = {}
            this.width = undefined;
            this.height = undefined;
      }
    }
  }
  
  module.exports = Rectangle;
