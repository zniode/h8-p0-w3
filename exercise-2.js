function balikString(str){
  
    var result = '';
    
    for(var i = str.length-1; i >= 0; i--){
      result = result + str[i];
    }
    return result;
    
  }
  
  console.log(balikString('hello world!'));