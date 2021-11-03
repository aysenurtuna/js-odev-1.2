
function friendNumbers(number1, number2) {
    let total1 = 1
    let total2 = 1

    for (let i = 2; i <= (number1); i++) {
        if (number1 % i == 0) {
            total1 += i
        }
    }
    for (let i = 2; i <= (number2); i++) {
        if (number2 % i == 0) {
            total2 += i
        }
    }
    if (total1 == total2){
         console.log("İki sayı arkadaştır")
    }
    else{
        console.log("İki sayı arkadaş değildir")
    }
        
}
friendNumbers(947835,1125765)
friendNumbers(220,284)
friendNumbers(503056,514736)