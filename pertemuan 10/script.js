// print data
// document.write("Hello World")
// alert("selamat datang")
// console.log("samsul rijal")

// Variabel
// nama : Samsul Rijal
// alamat : Tangerang
// dekslarasi variabel
// var, let, const

// VAR -> bisa di deklarasi ulang/ dibuat ulang
// var nama = "Samsul Rijal"
// var alamat = "Bandung"
// var nama = "Asep"

// LET -> tidak bisa di deklarasi ulang/dibuat ulang
// let nama = "Samsul Rijal"
// let alamat = "Bandung"
// nama = "Asep"

// const -> datanya tetap, tidak bisa diubah
// const umur = 20
// umur = 25

// console.log(nama);
// console.log(alamat);
// console.log(umur);


// === Tipe data dasar ===
// STRING, NUMBER, BOOLEAN, NULL, UNDEFINED

// let nama = "Samsul Rijal" // string
// let umur = 20 // number
// let isActive = true // boolean
// let alamat = null // null
// let pekerjaan // undefined

// console.log(nama);
// console.log(umur);
// console.log(isActive);
// console.log(alamat);
// console.log(pekerjaan);



// === Operator Aritmatika ===

// let a = 15;
// let b = 2;

// console.log(a + b); // penjumlahan
// console.log(a - b); // pengurangan
// console.log(a * b); // perkalian
// console.log(a / b); // pembagian
// console.log(a % b); // modulus atau sisa bagi


// let hargaBimoli = 50000
// let jumlah = 5

// let hasil = hargaBimoli * jumlah

// // menggabungkan string dengan variabel
// console.log("total harga " + hasil);
// console.log("total harga ", "jumlah bimoli sebanyak", jumlah, "yaitu", hasil);
// console.log(`total harga jumlah bimoli sebanyak ${jumlah} yaitu ${hasil}`);


// === Kondisi ===
// let nama = "Asep"
// let isLogin = false

// if(isLogin){
//     console.log(`selamat datang ${nama}`);
// } else {
//     console.log("anda belum login");
// }

// if(nama === "Agus"){
//     console.log("selamat anda dapat diskon agustus");
// } else {
//     console.log("anda tidak dapat diskon");
// }

// == perbadingan tidak sampai mengecek ke tipe data
// === akan mengecek sampai ke tipe data

// let nilai = "80"
// if(nilai == 80){
//     console.log("selamat anda lulus");
// }

// let lampu = "kuning"

// if(lampu == "merah"){
//     console.log("anda wajib berhenti");
// } else if(lampu == "kuning"){
//     console.log("anda wajib hati hati");
// } else if(lampu == "hijau"){
//     console.log("anda wajib jalan");
// } else {
//     console.log("lampu yang anda masukan tidak ada");
// }

// SWITCH CASE
// fungsinya ketika mempunyai kondisi yang banyak
// let hari = "selasa"
// switch (hari) {
//     case "senin":
//         console.log("belajar masak");
//         break;
//     case "selasa":
//         console.log("belajar renang");
//         break;
//     case "rabu":
//         console.log("belajar coding");
//         break;
//     case "kamis":
//         console.log("belajar design");
//         break;
//     case "jumat":
//         console.log("belajar edit video");
//         break;
//     case "sabtu":
//         console.log("maen game");
//         break;
//     case "minggu":
//         console.log("nonton film");
//         break;
//     default:
//         console.log("hari yang anda masukan tidak ada");
//         break;
// }


// === Perulangan atau Loop ===

// let a = 10
// let b = 5
// a++ // a + 1
// b-- // b - 1
// console.log(a);
// console.log(b);

// number 1
// 1 < 10 
// number + 1
for(let number = 1; number <= 10; number++){
    console.log("Hello " + number);
}