function pasanganTerbesar(num) {

  var add = [];
  var stringAngka = String(num);

  for (var i = 0; i < stringAngka.length; i++) {
    var nilai = (stringAngka[i] + stringAngka[i + 1])

    add.push(nilai);
  }
  var urut = add.sort();
  return Number(urut[urut.length - 1])
}


// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
