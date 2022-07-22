


function FizzBuzz (input) {
    if (input === ""){
        return "vazio"
    } if (input % 3 === 0 && input % 5 === 0){
        return "FizzBuzz"
    }  if (input % 3 === 0){
        return "Fizz"
    } if (input % 5 === 0){
        return "Buzz"
    } if (typeof input !== 'number'){
        return "não é um número"
    } 
}

let result = FizzBuzz()
console.log(result)