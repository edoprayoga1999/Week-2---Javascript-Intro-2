/* 
Sort() akan mengurutkan elemen array. Lalu menimpa array asli dan mengubahnya menjadi string. Elemen diurutkan sesuai abjad.
Untuk number, elemen diurutkan sesuai angka pertama dari yang terkecil hingga terbesar. Namun tetap bisa diurutkan sesuai seluruh angka elemen number tersebut dengan menambahkan 
function(a,b){ return a-b } didalam sort
*/
console.log("1. Function sort()")
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)

const number = [15,11,13,250,152,22]
number.sort(function (a,b) { return a-b })
console.log(number)
console.log("----------------------------------------------")
/* 
find() akan me-return nilai elemen pertama yang lulus pengujian. find() akan mengeksekusi setiap elemen array. Jika tidak ada elemen yang ditemukan, find() akan me-return undefined.
find() tidak akan mengeksekusi elemen yang kosong. find() tidak mengubah array asli.
*/
console.log("2. Function find()")
const age = [10,15,20,25,30]

const find = age.find(function(a){ return a > 10})
console.log(find)
console.log("----------------------------------------------")
/*
filter() akan membuat array baru yang isi elemen nya didapat dari hasil eksekusi yang lulus pengujian. filter() tidak me replace array asli
*/
console.log("3. Function filter()")
const ages = [33, 40, 16, 32]
const filter = ages.filter(function(age){ return age > 17})
console.log(filter)
console.log("----------------------------------------------")
/*
concat() akan menggabungkan 2 atau lebih data. Lalu akan mereturn hasil baru yang elemen nya terdapat dalam 2 atau lebih data yang digabungkan tadi.
concat() tidak mengubah data asli
*/
console.log("4. Function concat()")
const array1 = ["BMW","Porsche","Tesla"]
const array2 = ["Toyota","Daihatsu"]
const car = array1.concat(array2)
const string1 = "Sea"
const string2 = "food"
const makan = string1.concat(string2)
console.log(`${car} dan ${makan}`)

console.log("----------------------------------------------")
/* toString() akan mengubah data menjadi string. Biasanya dipakai jika ingin menampilkan data sebagai teks. Tidak dapat digunakan kepada object */
console.log("5. Function toString()")
const boolean = true;
const num = 10
const booleantext = boolean.toString()
const numtext = num.toString()
console.log(`Contoh boolean to string = ${booleantext} 
Contoh number to string = ${numtext}`)
console.log("----------------------------------------------")
/* 
isInteger() akan mengecek apakah data tersebut bilangan bulat atau tidak. Lalu akan mereturn data boolean true jika benar dan false jika salah
*/
console.log("6. Function isInteger()")
const bilangan1 = Number.isInteger(52)
const bilangan2 = Number.isInteger(10.5)
const bilangan3 = Number.isInteger(10 / 3)
console.log(`Apakah bilangan1(52) integer ? ${bilangan1}
Apakah bilangan2(10.5) integer ? ${bilangan2}
Apakah bilangan3(10 / 3) integer ? ${bilangan3}`)
console.log("----------------------------------------------")
/*
includes() akan mengecek data apakah data tersebut berisi data yang ditentukan. jika iya maka akan me-return true jika tidak maka akan me-return false. perlu diingat bahwa
includes itu case sensitive(huruf kapital dan kecil berpengaruh)
*/
console.log("7. Function includes()")
const kalimat = "Saya bermain hujan"
const result = kalimat.includes("hujan")
console.log(`Apakah kalimat berisikan kata hujan ? ${result}`)
console.log("----------------------------------------------")
/*
replace() akan mengganti nilai string yang ditentukan dengan nilai string yang baru. lalu mereturn string baru yang telah diubah
*/
console.log("8. Function replace()")
const kalimat1 = "Ayo belajar PHP"
const newKalimat1 = kalimat1.replace("PHP","Javascript")
console.log(newKalimat1)
console.log("----------------------------------------------")
/*
substring() akan mengambil string pada posisi yang ditentukan lalu akan mereturn string baru yang berada pada range yang telah di buat
*/
console.log("9. Function substring()")
const kalimat2 = "Ayo vaksin booster"
const newKalimat2 = kalimat2.substring(4,10) // mengambil string dari range index 4 ke 10
console.log(newKalimat2)
console.log("----------------------------------------------")
/*
toLowerCase() akan mengubah string menjadi huruf kecil
*/
console.log("10. Function toLowerCase()")
const kalimat3 = "Halo namaku EDO PRAYOGA"
const newKalimat3 = kalimat3.toLowerCase()
console.log(newKalimat3)