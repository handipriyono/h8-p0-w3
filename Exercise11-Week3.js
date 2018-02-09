function tentukanDeretAritmatika(arr) {


  var jarak = arr[1] - arr[0]; // determine 'deret aritmatika'
  var range = arr.length - 1;
  var tiruan = [];

  // making the real/true sequence number based on range above
  for (var i = arr[0]; i <= arr[arr.length - 1]; i += jarak) {

    tiruan.push(i);

  }

  if (String(tiruan) === String(arr)) {
    return true;
  }

  return false;

}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
