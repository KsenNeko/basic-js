const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
   let a = Number(sampleActivity);
    if (isNaN(a)) {
        return false;
    }
    if (a<=0 || a>= MODERN_ACTIVITY){
        return false;
    }
    let k = 0.693 / HALF_LIFE_PERIOD;
    return Math.floor(Math.log(parseFloat(sampleActivity)/MODERN_ACTIVITY)/k)*-1;
};
