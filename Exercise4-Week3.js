var input = ['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'];

var potongTGL = input[3].split('/'); // split the date
var tglBaru = input[3].split('/'); // split the date - again for another
var bulan = potongTGL[1]; // take the month-digit (05)

function dataHandling2() {

  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4, 1, 'Pria', 'SMA Internasional Metro');

  //turn the month into a word
  switch (bulan) {
    case '01':
      bulan = 'Januari';
      break;
    case '02':
      bulan = 'Februari';
      break;
    case '03':
      bulan = 'Maret';
      break;
    case '04':
      bulan = 'April';
      break;
    case '05':
      bulan = 'Mei';
      break;
    case '06':
      bulan = 'Juni';
      break;
    case '07':
      bulan = 'Juli';
      break;
    case '08':
      bulan = 'Agustus';
      break;
    case '09':
      bulan = 'September';
      break;
    case '10':
      bulan = 'Oktober';
      break;
    case '11':
      bulan = 'November';
      break;
    case '12':
      bulan = 'Desember';
      break;

  }

  console.log(input); // show array that has been spliced
  console.log(bulan); // show bulan in words

  var tglBalik = potongTGL.sort(function(a, b) {
    return b - a;
  });
  console.log(tglBalik); // tgl descending

  var tglBaruJoin = tglBaru.join('-'); // membuat tgl menggunakan ( - )
  console.log(tglBaruJoin);

  var namalimit = input[1].slice(0, 15);
  console.log(namalimit); // limit nama to 15 char.

}

dataHandling2(); // execute function
