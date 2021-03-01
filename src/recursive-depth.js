const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, level = 0) {
      let a = arr.filter(i => Array.isArray(i));
      let mas = [];
      if(a.length !== 0) {
        for(let i=0; i<a.length; i++)
        {
          if(level === 0)
          {
            mas.push(this.calculateDepth(a[i],1)+1);
          }
          else return 1 + this.calculateDepth(a[i],1);
        }
      } else return 1;
      return Math.max.apply(null,mas);
    }
    
  };
