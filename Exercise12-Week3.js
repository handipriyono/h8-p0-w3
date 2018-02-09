function tentukanDeretGeometri(arr) {

  var range = arr[1] / arr[0];
  var max = arr[arr.length - 1];
  var duplikat = [];

  // making the real geometri number based on range above.
  for (var i = arr[0]; i <= max; i *= range) {
    duplikat.push(i);
  }

  //compare the provided geometri number and duplicate geometri
  if (String(arr) === String(duplikat)) {
    return true;
  }

  return false;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretGeometri([5, 25, 125, 625])); // true
