function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('vai toma no cu piranha')
    }else{
        var fsex = document.getElementsByName('radsex') //por nome pois por ID não da, os nomes tem que ser iguais
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'bebeh.png')
            }else if (idade < 21){
                img.setAttribute('src', 'jovemh.png')
            }else if (idade < 51){
                img.setAttribute('src', 'adultoh.png')
            }else{
                img.setAttribute('src','idosoh.png')
            }
        }else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'bebem.png')
            }else if (idade < 21){
                img.setAttribute('src', 'jovemm.png')
            }else if (idade < 51){
                img.setAttribute('src', 'adultom.png')
            }else{
                img.setAttribute('src','idosom.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}