function botao(){
    var inicio = document.getElementById('1')
    var fim = document.getElementById('2')
    var passo = document.getElementById('3')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[erro meu fi]')
    } else {
    res.innerHTML = "contando..."
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p == 0){
        window.alert('impossível contar com passo 0, ele passa a valer 1')
        p = 1
    }
    if (i < f){
        for(var c = i; c <= f; c += p){
            res.innerHTML += `${c} \u{1f449}`
        }
    }else {
        for(var c = i; c >=f; c-=p){
            res.innerHTML += `${c} \u{1f449}`
        }
    
    }
            res.innerHTML += `\u{1f3c1}`
    }
}