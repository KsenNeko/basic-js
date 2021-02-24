const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    this.links.push(value);
    return this;
  },
  removeLink(position) {
    if (position > this.links.length || position <= 0 || position !== parseInt(position, 10))
      throw Error;
    this.links.splice(position-1, 1);
      return this;
  },
  reverseChain() {
    this.links.reverse();
    return this;
  },
  finishChain() {
    let str = `( ${this.links[0]} )`;
    for( let k=1; k<this.links.length; k++)
    {
      if(typeof this.links[k] === 'undefined')
      {
        str = `${str}~~( )`;
      }
      else {
      str = `${str}~~( ${this.links[k]} )`;
      }
    }
    return str;
  },
};

module.exports = chainMaker;
