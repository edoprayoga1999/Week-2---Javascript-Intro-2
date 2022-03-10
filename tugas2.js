const name = ["Abigail", "Alexandra", "Alison","Amanda",
              "Angela", "Bella","Carol", "Caroline", 
              "Carolyn","Deirdre", "Diana", "Elizabeth",
              "Ella", "Faith", "Olivia", "Penelope"]

const searchName = (str,lim,cb) => {
    const filter = name.filter(el => el.toLowerCase().includes(str));
    return cb(filter,lim)
}
const printName = (a,b) => {
    const limit = a.slice(0,b)
    if (limit.length == 0){
        return "Data tidak ditemukan"
    } else {
        return limit
    }
}
const hasil = searchName("an",4,printName)
console.log(hasil)

