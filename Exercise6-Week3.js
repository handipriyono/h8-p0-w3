function angkaPalindrome(num) {

  num++; // add num by 1
  for (var i = num; i < num * num; i++) {

    var balik = String(i).split('').reverse().join(''); // reverse number

    if (i === (Number(balik))) { // compare num with num-reverse

      return i;
      break;
    }
  }

}

// TEST CASES only:
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(800)); // 808
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(2000)); // 1002
