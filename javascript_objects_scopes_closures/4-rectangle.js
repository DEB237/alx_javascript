class Rectangle{
    width;
    height;
    constructor(w, h){
        this.width = w;
        this.height = h;
    }
    islessthanzero(){
        if (this.width, this.height <= 0){
            const obj = {}
        }
    }
    print(){
        for (let i = 0; i < this.height; i++){
           console.log("X".repeat(this.width));
        }
    }
    rotate(){
        [this.width, this.height] = 
        [this.height, this.width];
    }
    double(){
     this.width *=  2;
     this.height *= 2;   
    }
}
module.exports = Rectangle;
