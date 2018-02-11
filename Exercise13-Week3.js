function targetTerdekat(arr) {

  var o = [];
  var x = [];

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === 'x') {
      x.push(i);

    } else if (arr[i] === 'o') {
      o.push(i);
    }

  }

  // to grab just 1 number from array
  var xMax = Math.max(...x);
  var xMin = Math.min(...x);
  var oMax = Math.max(...o);

  if (xMax === -Infinity || oMax === -Infinity) {
    return 0;

  } else if (Number(xMin) > Number(oMax)) {
    return Number(xMin) - Number(oMax);
  } else if (Number(xMax) < Number(oMax)) {
    return Number(oMax) - Number(xMax);
  } else if (Number(xMin) < Number(oMax)) {
    return Number(oMax) - Number(xMin);
  }

}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2