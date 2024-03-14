function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'manha3.png'
        document.body.style.background = '#e2c9b1'
    } else if (hora>= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde2.png'
        document.body.style.background = '#839cb2'
    } else {
        //Boa noite!
        img.src = 'noite1.png'
        document.body.style.background = '#173642'
    }
}
