function groupAnimals(animals) {

  var animalUrut = animals.sort();

  var arrayHasil = [];
  for (var q = 0; q < animalUrut.length; q++) {

    var arrayTmp = [];
    var isi = ","
    for (var r = 0; r < animalUrut.length; r++) {



      if (animalUrut[q].charAt(0) === animalUrut[r].charAt(0)) {
        isi = animalUrut[r]
        arrayTmp.push(isi);

      }

    }

    arrayHasil.push(arre);


  }


  var ArrayUnik = [];
  var itemsFound = {};
  for (var i = 0, l = arrayHasil.length; i < l; i++) {
    var stringified = JSON.stringify(aee[i]);
    if (itemsFound[stringified]) {
      continue;
    }
    ArrayUnik.push(arrayHasil[i]);
    itemsFound[stringified] = true;
  }




  return ArrayUnik;
}


console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'kodok', 'kurungan', 'kelabang', 'kardus', 'hda']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
