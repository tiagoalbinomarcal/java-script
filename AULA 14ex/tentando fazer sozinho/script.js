function somar(){
    var num = document.getElementById('num')
    var tab = document.getElementById('selecttab')
    if (num.value.length ==0){
        window.alert('poe numero rapa')
    }
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ''
    while (c <= 20){
        let item = document.createElement('option')
        item.text = `${n} + ${c} = ${n+c}`
        c++
        tab.appendChild(item)
    }
}