// Fungsi untuk menghasilkan nilai acak antara 1 dan 100
function nilaiAcak() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  // Fungsi untuk membuat array dengan 100 nilai acak
  function buatArrayAcak() {
    const arrayAcak = [];
    for (let i = 0; i < 100; i++) {
      arrayAcak.push(nilaiAcak());
    }
    return arrayAcak;
  }
  
  // Fungsi untuk membagi array menjadi array genap dan ganjil berdasarkan index
  function bagiArrayGenapGanjil(arrayInput) {
    const arrayGenap = [];
    const arrayGanjil = [];
  
    for (let i = 0; i < arrayInput.length; i++) {
      if (i % 2 === 0) {
        arrayGenap.push(arrayInput[i]);
      } else {
        arrayGanjil.push(arrayInput[i]);
      }
    }
  
    return { arrayGenap, arrayGanjil };
  }
  
  // Fungsi untuk menghitung nilai Minimum pada array
  function hitungMinimum(array) {
    let minimum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < minimum) {
        minimum = array[i];
      }
    }
    return minimum;
  }
  
  // Fungsi untuk menghitung nilai Maksimum pada array
  function hitungMaksimum(array) {
    let maksimum = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maksimum) {
        maksimum = array[i];
      }
    }
    return maksimum;
  }
  
  // Fungsi untuk menghitung Total pada array
  function hitungTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung Rata-rata pada array
  function hitungRataRata(array) {
    const total = hitungTotal(array);
    return total / array.length;
  }
  
  // Membuat array dengan 100 nilai acak
  const arrayAcak = buatArrayAcak();
  
  // Memecah array menjadi array genap dan ganjil
  const { arrayGenap, arrayGanjil } = bagiArrayGenapGanjil(arrayAcak);
  
  // Menghitung Min, Max, Total, dan Rata-rata untuk array genap dan ganjil
  const minGenap = hitungMinimum(arrayGenap);
  const maxGenap = hitungMaksimum(arrayGenap);
  const totalGenap = hitungTotal(arrayGenap);
  const rataRataGenap = hitungRataRata(arrayGenap);
  
  const minGanjil = hitungMinimum(arrayGanjil);
  const maxGanjil = hitungMaksimum(arrayGanjil);
  const totalGanjil = hitungTotal(arrayGanjil);
  const rataRataGanjil = hitungRataRata(arrayGanjil);
  
  // Menampilkan hasil
  console.log("Array dengan jumlah indeks 100:", arrayAcak);
  console.log("Array genap dengan jumlah indeks 50:", arrayGenap);
  console.log("Array ganjil dengan jumlah indeks 50:", arrayGanjil);
  
  console.log("Minimum pada array genap:", minGenap);
  console.log("Maksimum pada array genap:", maxGenap);
  console.log("Total pada array genap:", totalGenap);
  console.log("Rata-rata pada array genap:", rataRataGenap);
  
  console.log("Minimum pada array ganjil:", minGanjil);
  console.log("Maksimum pada array ganjil:", maxGanjil);
  console.log("Total pada array ganjil:", totalGanjil);
  console.log("Rata-rata pada array ganjil:", rataRataGanjil);
  
  // Membandingkan hasil
  console.log(minGenap > minGanjil ? "Minimum lebih besar pada array genap" : minGenap < minGanjil ? "Minimum lebih besar pada array ganjil" : "Minimum memiliki nilai yang sama antara array genap dan ganjil");
  console.log(maxGenap > maxGanjil ? "Maksimum lebih besar pada array genap" : maxGenap < maxGanjil ? "Maksimum lebih besar pada array ganjil" : "Maksimum memiliki nilai yang sama antara array genap dan ganjil");
  console.log(totalGenap === totalGanjil ? "Total memiliki nilai yang sama antara array genap dan ganjil" : totalGenap > totalGanjil ? "Total lebih besar pada array genap" : "Total lebih besar pada array ganjil");
  console.log(rataRataGenap > rataRataGanjil ? "Rata-rata lebih besar pada array genap" : rataRataGenap < rataRataGanjil ? "Rata-rata lebih besar pada array ganjil" : "Rata-rata memiliki nilai yang sama antara array genap dan ganjil");
  