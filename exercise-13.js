function targetTerdekat(arr) {
    // you can only write your code here!
    
    //Mencari Posisi O
    var posisiO = arr.indexOf('o');
    
    //Mencari Posisi X
    var posisiX = [];
      for(var i = 0; i < arr.length; i++){
      if(arr[i] === 'x'){
        posisiX.push(i);
        //console.log(posisiX)
      }
    }
    
    //Mencari Jarak dari O ke X
    var jarak = [];
    for(var j = 0; j < posisiX.length; j++) {
      var bedaJarak = Math.abs(posisiX[j] - posisiO);
      //console.log(bedaJarak)
      jarak.push(bedaJarak);
      //console.log(jarak)
    }
    
    if(jarak.length === 0){
      return 0;
    } else {
      var nearest = jarak[0];
      //console.log(nearest)
      for (var k = 0; k < jarak.length; k++) {
        if(jarak[k] < nearest){
        nearest = jarak[k];
        }
      }
    }
    return nearest
  }
  
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2