// Contoh penggunaan if, else, dan nested if
let nilai = 100;
if (nilai >= 90) {
  console.log("Nilai Anda A");
} else if (nilai >= 80) {
  console.log("Nilai Anda B");
} else {
  console.log("Nilai Anda C");
}

// Contoh penggunaan switch case
let hari = "Minggu";
switch (hari) {
  case "Senin":
    console.log("Hari kerja");
    break;
  case "Sabtu":
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari tidak valid");
}

// Contoh penggunaan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}

// Contoh penggunaan while loop
let angka = 1;
while (angka <= 5) {
  console.log("While loop ke-" + angka);
  angka++;
}

// Contoh penggunaan do while loop
let angka2 = 1;
do {
  console.log("Do while loop ke-" + angka2);
  angka2++;
} while (angka2 <= 5);

// Contoh penggunaan fungsi
function tambahkan(angka1, angka2) {
  return angka1 + angka2;
}

let hasilTambah = tambahkan(2, 7);
console.log("Hasil penjumlahan: " + hasilTambah);
