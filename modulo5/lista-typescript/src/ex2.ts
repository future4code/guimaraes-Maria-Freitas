const checkType = (param:any):string => {
    return typeof param
}

console.log(checkType(130))
console.log(checkType([40,50]))
console.log(checkType("Maria"))
console.log(checkType(["Maria", "Karolina"]))
console.log(checkType(true))