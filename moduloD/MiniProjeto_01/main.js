function carregar(){
    var msg = window.document.getElementById('msg')
    var msg_periodo = window.document.getElementById('msg_periodo')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 5 && hora < 12){
        //Bom Dia
        img.src = './img/manhã.jpg'
        msg_periodo.innerHTML = 'Bom dia!'
        document.body.style.background = '#F7B845'
    }else if (hora >= 12 && hora < 18){
        //Boa tarde
        img.src = './img/tarde.jpg'
        msg_periodo.innerHTML = 'Boa tarde!'
        document.body.style.background = '#82A3FF'
    }else if (hora >= 18 && hora <= 23){
        //Boa Noite
        img.src = './img/noite.jpg'
        msg_periodo.innerHTML = 'Boa noite!'
        document.body.style.background = '#563B34'
    }else{
        //Boa Madrugada
        img.src = './img/madrugada.jpg'
        msg_periodo.innerHTML = 'Boa madrugada!'
        document.body.style.background = '#1D232F'
    }
    msg.innerHTML = `Agora são ${hora} horas.`
}