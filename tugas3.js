function check(arr) {
    for(let i=0; i<arr.length; i++) {
        if(typeof(arr[i]) != "number") {
        return true
        }
    }
        return false
}
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (typeof(nilaiAwal) != "number" || typeof(nilaiAkhir) != "number" || Array.isArray(dataArray) == false) {
        return "Format nilai awal dan akhir harus angka. Lalu data harus array"
    } else if (nilaiAwal > nilaiAkhir){
        return "Nilai akhir harus lebih besar dari nilai awal"
    } else if (dataArray.length < 5){
        return "Jumlah elemen angka dalam dataArray harus lebih dari 5"
    } else if (check(dataArray) == true){
        return "Terdapat data didalam array yang bukan number"
    } else {
    const result = dataArray.filter((check) => { return check > nilaiAwal && check < nilaiAkhir })
        if (result.length == 0){
            return "Nilai tidak ditemukan"
        } else {
            result.sort(function (a,b) { return a-b })
            return result
        }
    }
}
console.log(seleksiNilai(5,20,[2, 25, 4, 14, 17, 30, 8]))   // output nya [ 8, 14, 17 ]
console.log(seleksiNilai(5,20,[2, 25, 4, 14, 17, 30, "8"])) // output nya "Terdapat data didalam array yang bukan number"
console.log(seleksiNilai(15,3,[2, 25, 4, 14, 17, 30, 8]))   // output nya "Nilai akhir harus lebih besar dari nilai awal"
console.log(seleksiNilai(5,17,[2, 25, 4]))                  // output nya "Jumlah elemen angka dalam dataArray harus lebih dari 5"
console.log(seleksiNilai(5,17,[2, 25, 4, 1, 30, 18]))       // output nya "Nilai tidak ditemukan"