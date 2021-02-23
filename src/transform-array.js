const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      switch (arr[i]) {
        case "--discard-next":
          i++;
          break;
        case "--discard-prev":
          if if (i > 0 && (res[res.length - 1] === arr[i-1] || (isNaN(arr[i-1]) && isNaN(res[res.length - 1])))){
            res.splice(res.length - 1, 1);
          }
          break;
        case "--double-next":
          if (i < arr.length - 1) {
            res.push(arr[i + 1]);
          }
          break;
        case "--double-prev":
          if if (i > 0 && (res[res.length - 1] === arr[i-1] || (isNaN(arr[i-1]) && isNaN(res[res.length - 1])))) {
            res.push(arr[i - 1]);
          }
          break;
        default:
          res.push(arr[i]);
      }
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
