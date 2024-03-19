function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'bebehomen1.png')
            } else if (idade < 50) {
                //jovem
                img.setAttribute('src', 'jovemhomen3.png')
            } else if (idade < 60) {
                //idoso
                img.setAttribute('src', 'idosohomen4.png')
            }          
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //bebe
                img.setAttribute('src', 'bebemulher1.png')
            } else if (idade < 35) {
                //jovem
                img.setAttribute('src', 'jovemmulher3.png')
            } else if (idade < 50) {
                //idoso
                img.setAttribute('src', 'idosamulher4.png')
            }   
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)        
    }
}