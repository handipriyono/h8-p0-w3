
function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var count = 1;
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === ' ') {
      count = count + 1;
    }

  }

  return count;

}

// TEST CASES
console.log(hitungJumlahKata('I know who you are')); //5
console.log(hitungJumlahKata('Everything gonna be okay')); // 4
console.log(hitungJumlahKata('Hacktiv8 allways')); // 2
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
