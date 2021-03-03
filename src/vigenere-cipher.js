const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  flag = true;
 constructor(a = true){
    this.flag = a;
  }
    encrypt(message, key) {
      while(key.length < message.length)
      {
          key = key+key;
      }
      message = message.toUpperCase();
      key = key.toUpperCase();
      let res = [];
      for(let i=0, j=0; i<message.length; i++)
      {
        if(/[a-z]/i.test(message[i]))
        {
          res[i] = String.fromCharCode((message.charCodeAt(i) +  key.charCodeAt(j))%26 + 65);
          j++;
        } else  res[i] = message[i];
      }
      if(this.flag)
      return res.join('');
      return res.reverse().join('');
    }    
    decrypt(encryptedMessage, key) {
      while(key.length < encryptedMessage.length)
      {
          key = key+key;
      }
      encryptedMessage = encryptedMessage.toUpperCase();
      key = key.toUpperCase();
      let res = [];
      for(let i=0, j=0; i<encryptedMessage.length; i++)
      {
        if(/[a-z]/i.test(encryptedMessage[i]))
        {
          res[i] = String.fromCharCode((encryptedMessage.charCodeAt(i) -  key.charCodeAt(j)+26)%26 + 65);
          j++;
        } else  res[i] = encryptedMessage[i];
      }
      if(this.flag)
      return res.join('');
      return res.reverse().join('');
    }
  }

module.exports = VigenereCipheringMachine;
