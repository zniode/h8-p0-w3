function tentukanDeretAritmatika(arr) {
    var increment = arr[1] - arr[0];
    var selisih = 0;
      for (var i = 0; i < arr.length - 1; i++){
        selisih = arr[i+1] - arr[i]
        }
        return increment === selisih;
    }
    
    // TEST CASES
    console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
    console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
    console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
    console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
    console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false