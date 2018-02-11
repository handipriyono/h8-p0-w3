function pasanganTerbesar(num) {

  var ad = '';
  var ar = [];
  var stringn = String(num);
  for (var i = 0; i < stringn.length - 1; i++) {
    // make couple number
    ar.push(stringn[i] + stringn[i + 1]);
  }

  //get the highest number
  return Math.max.apply(null, ar);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99