const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let cats = 0;
    for (let subArr of matrix){
        for (let elem of subArr) {
            if(elem === '^^')
            cats +=1;
        }
    }
    return cats;
};
