function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'fotodia.png'
        document.body.style.background = '#ffee11'
    }else if(hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#fc8301'
    }else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#122c50'
    }
}