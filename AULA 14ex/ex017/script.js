function gerar(){
    var val = document.getElementById('num')
    var res = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número')
    }else{
        var n = Number(val.value)
        var c = 1
        res.innerText = ''
        while (c <= 10) {
            var item = document.createElement('option') //variavel que mostra o resultado
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `res${c}` //para definir um valor util no php
            res.appendChild(item) //para mostrar
            c++
        }  
    }
    
}