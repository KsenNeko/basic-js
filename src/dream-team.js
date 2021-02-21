const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
    res = '';
    for(human in members) {
        members[human] = members[human].replace(/\s+/g, '');
    }
    members.sort();
    for(human in members) {
        if(typeof human === 'string'){
        res = res + members[human][0];
        }
    }
    if (res === '')  return false;
    return res.toUpperCase();
};
