function mengelompokkanAngka(arr) {
  var tmp = [
    [],
    [],
    [],
  ];

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] % 3 === 0) {
      tmp[2].push(arr[i]);
    } else if (arr[i] % 2 === 0) {
      tmp[0].push(arr[i]);
    } else {
      tmp[1].push(arr[i]);
    }
  }

  return tmp;
}

// TEST CASES - only
console.log(mengelompokkanAngka([1, 3, 5, 7, 6, 10])); // [ [ 10 ], [ 1, 5, 7 ], [ 3, 6 ] ]
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]
