function groupAnimals(animals) {

  var animalUrut = animals.sort();

  var arrayHasil = [];
  for (var q = 0; q < animalUrut.length; q++) {

    var arrayTmp = [];
    for (var r = 0; r < animalUrut.length; r++) {

      if (animalUrut[q].charAt(0) === animalUrut[r].charAt(0)) {
        isi = animalUrut[r];
        arrayTmp.push(isi);

      }

    }

    arrayHasil.push(arrayTmp);

  }

  // Make array unique and no duplicate
  var ArrayUnik = [];
  var itemsFound = {};
  for (var i = 0, l = arrayHasil.length; i < l; i++) {
    var stringified = JSON.stringify(arrayHasil[i]);
    if (itemsFound[stringified]) {
      continue;
    }

    ArrayUnik.push(arrayHasil[i]);
    itemsFound[stringified] = true;
  }




  return ArrayUnik;
}

// test case only
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'kodok', 'tikus', 'kelabang']));