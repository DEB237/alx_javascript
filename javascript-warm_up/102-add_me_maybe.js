function incremetAndCall(number, theFunction){
    number++;
    theFunction(number);
}
module.exports = {incremetAndCall};