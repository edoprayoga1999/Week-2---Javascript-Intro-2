const nilai = [2, 25, 4, 14, 17, 30, 8]
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
if (typeof(nilaiAwal) != "number" || typeof(nilaiAkhir) != "number" || Array.isArray(dataArray) == false) {
    return "Format nilai awal dan akhir harus angka. Lalu data harus array"
} else {
    if (nilaiAwal > nilaiAkhir){
        return "Nilai akhir harus lebih besar dari nilai awal"
    } else if (dataArray.length < 5){
        return "Jumlah elemen angka dalam dataArray harus lebih dari 5"
    } else {
        function check(arr) {
            for(let i=0; i<arr.length; i++){
                if(typeof arr[i] != "number")
                 return true
                }
                 return false
            }
        if (check(dataArray) == true){
            return "Data didalam array harus number"
        }
        const result = dataArray.filter(check => check > nilaiAwal && check < nilaiAkhir)
        if (result.length == 0){
            return "Nilai tidak ditemukan"
        } else {
            result.sort(function (a,b) { return a-b })
            return result
        }
    }
}
}
console.log(seleksiNilai(30,45,nilai))