const name = ["Abigail", "Alexandra", "Alison","Amanda",
              "Angela", "Bella","Carol", "Caroline", 
              "Carolyn","Deirdre", "Diana", "Elizabeth",
              "Ella", "Faith", "Olivia", "Penelope"]

const searchName = (str,lim,cb) => {
    if (typeof(str) != "string" || typeof(lim) != "number") {
        return "Parameter harus benar (parameter1==string, parameter2==number)"
    } else if (lim < 0) {
        return "Parameter lim tidak boleh kurang dari 0"
    }
    const filter = name.filter(el => el.toLowerCase().includes(str.toLowerCase()));
    return cb(filter,lim)
}
const printName = (a,b) => {
    if (a.length == 0){
        return "Data tidak ditemukan"
    } else {
        const limit = a.slice(0,b)
        return limit
    }
}
const hasil = searchName("AN",4,printName)
console.log(hasil)

