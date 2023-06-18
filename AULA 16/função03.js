function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
/*var resultado = fatorial(5)
console.log(resultado)*/
console.log(fatorial(5))