function gradeAwarded(number){
    if (number < 0 || number > 100){
        console.log("This is not a possible, an error has occured")
    } else if (number >= 0 && number <=19) {
        console.log("total fail")
    } else if (number >= 20 && number <=39) {
        console.log("needs improvement")
    } else if (number >= 40 && number <=69) {
        console.log("not bad")
    } else if (number >= 70 && number <=89) {
        console.log("great score")
    } else if (number >= 90 && number <=100) {
        console.log("amazing score")
    }
}
const number = 159
gradeAwarded(number)