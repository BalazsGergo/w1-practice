function logger(name) {
    console.log(name)
}
logger("Gergo")

function fullName(firstName,lastName) {
   let names = firstName + lastName
   return names
}

logger(fullName("Balazs ", "Gergo"))
