var num = document.getElementById('txtn')
var lista = document.getElementById('selval')
var valores =[]
var res = document.getElementById('res')

function isNumero(n){
    if(Number(n) <= 100 && Number(n) >= 1){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        res.innerHTML = ''
        let itens = document.createElement('option')
        let n1 = Number(num.value)
        itens.text = `O valor ${n1} foi adicionado`
        
        lista.appendChild(itens)
        valores.push(n1)
        valores.sort()
    }else{
        window.alert('Número inválio')
    }
    num.value='' //para limpar
    num.focus() //para o foco voltar a caixa de texto, poder digitar sem clicar
}
function fin(){
    if (valores.length == 0){
        window.alert('Coloque valores antes de finalizar')
    }else{
        let t_ele = valores.length
        res.innerHTML = ''
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]

        }
        media = soma / t_ele
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${t_ele} números cadastrados</p>`
        res.innerHTML += `<p> O menor valor é ${menor}</p>`
        res.innerHTML += `<p> O maior valor é ${maior}</p>`
        res.innerHTML += `<p> A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p> A média dos valores é ${media}</p>`
    }
   

}