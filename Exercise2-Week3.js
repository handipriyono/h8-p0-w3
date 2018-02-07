function balikString(kata) {
  var sambung = '';

  for (var i = kata.length - 1; i >= 0; i--) {
    sambung += kata[i];
  }
  console.log(sambung);

}

//sample execute of balikString function

balikString('Irsyah mardiah');
balikString('Handi Priyono');
