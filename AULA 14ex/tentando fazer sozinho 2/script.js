function contador(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('cont')
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('Coloque um número')
    }else{
    res.innerHTML = 'contando...'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    if (p == 0){
        window.alert('passo tem que ser diferente de 0')
        p = 1
    }
    if (i < f){
        for(var b = i;b <= f;b += p){
            res.innerHTML += `${b} `
        }
    }else{
        for(var b = i;b >= f;b -= p){
                res.innerHTML += `${b} `
            }
    }
        res.innerHTML += `\u{1f3c1}`
    }
}