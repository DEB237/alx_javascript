import Rectangle from "./4-rectangle";
class Square extends Rectangle{
    size;
    constructor(size){
    super(size, size);
    }
}
module.exports = Rectangle;
