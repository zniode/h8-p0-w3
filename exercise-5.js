function palindrome(kata){
  
    var result = '';
    
    for(var i = kata.length-1; i >= 0; i--){
      result = result + kata[i];
    }
    return result === kata
    
  }
  
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false