const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
   if(!Array.isArray(members)) return false;
    res = '';
    for(human in members) {
        if(typeof members[human] === 'string'){
        members[human] = members[human].replace(/\s+/g, '');
        res = res + members[human][0];
        }
    }
    if (res === '')  return false;
    res = res.toUpperCase().split('').sort().join('');
    return res;
};
