function angkaPalindrome(num) {

  // add num by 1 for making next number
  num = num + 1;

  for (var i = num; i < num * num; i++) {
    var balik = String(i).split('');
    var tmp = '';

    // making num to be Reverse using:  FOR Loop
    for (var y = balik.length - 1; y >= 0; y--) {
      tmp += balik[y];
    }

    if (i === (Number(tmp))) { // compare num with num-reverse
      return i;
    }

  }

}

// TEST CASES only:
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(802220)); // 803308
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(20111)); // 20202
