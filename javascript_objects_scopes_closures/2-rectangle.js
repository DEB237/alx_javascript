#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      this.width = w;
      this.height = h;
      if (w <= 0 || h <= 0){
            const obj = {};
            this.height = undefined;
            this.width = undefined;
      }
    }
  }
  
module.exports = Rectangle;
