function buying(name) {
    var users = [
      ['Adi', 20, 'male'],
      ['Budi', 19, 'male'],
      ['Cici', 20, 'female'],
      ['Dodo', 21, 'male']
    ];
    var product = [
      ['Zara clothes', 500000],
      ['Levi jeans', 1000000],
      ['Adidas Shoes', 1000000]
    ];
    var trans = [
      [0,0],
      [0,2],
      [1,1],
      [2,0],
      [3,2]
    ];
    
    var id_user;
    var id_trans = []
    var prod = []

    for(i=0; i<users.length; i++){
        if(name === users[i][0]){
          id_user = i 
        }
    }
    console.log(id_user)

    for(i=0; i<trans.length; i++){
      if(id_user === trans[i][0])
        id_trans.push(trans[i][1])   
    }

    console.log(id_trans)

    for(i=0; i<id_trans.length; i++){
      prod.push(product[id_trans[i]][0])
    }
    console.log(prod) 
  }

 console.log(buying('Adi'));